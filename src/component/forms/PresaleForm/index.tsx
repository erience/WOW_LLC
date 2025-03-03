"use client";

import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import s from "./PresaleForm.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useAccount } from "wagmi";
import Web3 from "web3";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import tokenABI from "../../../app/app/tokenAbi.json";
import presaleABI from "../../../app/app/presaleAbi.json";
import CustomConnectButton from "../../CustomConnectButton";

interface Currency {
  id: string;
  name: string;
  icon: string;
  label: string;
}

const currencies: Currency[] = [
  { id: "eth", name: "ETH", icon: "cryptocurrency:eth", label: "ERC-20" },
  { id: "usdt", name: "USDT", icon: "cryptocurrency:usdt", label: "ERC-20" },
  // { id: "card", name: "CARD", icon: "ion:card", label: "" },
];

const PresaleForm = () => {
  const { address, isConnected } = useAccount();
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    currencies[0].id
  );
  const [paymentAmount, setPaymentAmount] = useState<number | "">("");
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [showEthPrice, setShowEthPrice] = useState(0);
  // const networkId = 11155111;
  const networkId = 1;
  const rpcURL = process.env.NEXT_PUBLIC_API_RPCURL;
  const presaleContract = process.env.NEXT_PUBLIC_API_PRESALECONTRACT;
  const usdtContract = process.env.NEXT_PUBLIC_API_USDTCONTRACT;
  //@ts-ignore
  const [web3Connect, setWeb3Connect] = useState<Web3>(null);
  const [initPresaleContract, setInitPresaleContract] = useState<any>(null);
  const [tokenContract, setTokenContract] = useState<any>(null);
  const t = useTranslations("HomePage.countdown");
  const selectedCurrencyIcon =
    currencies.find((c) => c.id === selectedCurrency)?.icon || "";

  //connect wallet click on button
  const connectWallet = async () => {
    if (!window.ethereum) {
      const notify = () =>
        toast("Please install MetaMask!", { position: "top-right" });
      notify();
      // toast.error("Please install MetaMask!");
      return;
    }
    try {
      const web = new Web3(window.ethereum || rpcURL);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      web.eth.defaultAccount = address;
      setWeb3Connect(web);
      const presale = new web.eth.Contract(presaleABI, presaleContract);
      const token = new web.eth.Contract(tokenABI, usdtContract);
      setInitPresaleContract(presale);
      setTokenContract(token);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      const notify = () =>
        toast("Failed to connect wallet!", { position: "bottom-right" });
      notify();
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      connectWallet();
    }
  }, [isConnected, address]);

  const getSmartContractData = async () => {
    try {
      console.log("initPresaleContract", !initPresaleContract);
      if (!initPresaleContract) return;
      const presaleRate = await initPresaleContract.methods
        .presaleRate()
        .call();
      const humanReadablePresaleRate = Number(presaleRate) / 10 ** 12;
      console.log("Presale Rate:", humanReadablePresaleRate);

      const ethRate = await initPresaleContract.methods.getLatestPrice().call();
      const humanReadableETHPrice = Number(ethRate) / 10 ** 8;
      console.log("ETH rate:", humanReadableETHPrice);
    } catch (error) {
      console.error("getPresaleRate", { error });
    }
  };

  useEffect(() => {
    if (initPresaleContract) {
      getSmartContractData();
    }
  }, [initPresaleContract]);

  async function getWalletData() {
    try {
      if (!isConnected || !address || !web3Connect) {
        console.log("Please connect your wallet.");
        return;
      }
      const tokenContract = new web3Connect.eth.Contract(
        tokenABI,
        usdtContract
      );
      const balance = await tokenContract.methods.balanceOf(address).call();
      console.log({ balance });
      const humanReadableUSDTBalance = web3Connect.utils.fromWei(
        Number(balance),
        "mwei"
      );
      console.log("USDT Balance:", humanReadableUSDTBalance);
    } catch (error) {
      console.log("Error fetching wallet data", { error });
    }
  }

  useEffect(() => {
    const getShowEthPrice = async () => {
      if (
        selectedCurrency === "eth" &&
        initPresaleContract &&
        paymentAmount != 0
      ) {
        const ethAmountFromInput = paymentAmount;
        const ethAmountInWei = await web3Connect.utils.toWei(
          ethAmountFromInput.toString(),
          "ether"
        );
        const ethEquivalent = await initPresaleContract.methods
          .getReceivablePresaleTokens(ethAmountInWei, false)
          .call();
        const humanReadableSwapPriceForETH = Number(ethEquivalent) / 10 ** 18;
        setShowEthPrice(humanReadableSwapPriceForETH);
      }else{
        setShowEthPrice(0);
      }
    };
    getShowEthPrice();
  }, [selectedCurrency, initPresaleContract, paymentAmount]);

  const swapforUSDT = async () => {
    try {
      if (!isConnected || !address) {
        // toast.error("Please connect your wallet.");
        const notify = () =>
          toast("Please connect your wallet!", { position: "bottom-right" });
        notify();
        return;
      }

      // Get Receivable Presale Tokens using USDT
      const usdtAmountFromInput = paymentAmount;
      const usdtEquivalent = await initPresaleContract.methods
        .getReceivablePresaleTokens(usdtAmountFromInput, false)
        .call();
      const humanReadableSwapPriceForUSDT = usdtEquivalent / 10 ** 18;
      console.log("USDT Output Price:", humanReadableSwapPriceForUSDT);

      // const checkAllowance = allowanceAmount > usdtAmountFromInput; // Use the token amount as required allowance
      // console.log(checkAllowance);

      const approveTx = await tokenContract.methods
        .approve(presaleContract, "10000000000000000000000000000000000")
        .send({ from: address });
      if (!approveTx.status) {
        console.log("Approval transaction failed!");
        return;
      }

      const swapTxforUSDT = await initPresaleContract.methods
        .swapForUSDT(usdtAmountFromInput)
        .send({ from: address });
      if (swapTxforUSDT.status) {
        const notify = () =>
          toast("Presale Purchase transaction successful!", {
            position: "bottom-right",
          });
        notify();
      } else {
        const notify = () =>
          toast("Presale Purchase transaction failed!", {
            position: "bottom-right",
          });
        notify();
      }
    } catch (error) {
      console.error("Error in buy function:", error);
      const notify = () =>
        toast("An error occurred", { position: "bottom-right" });
      notify();
    }
  };

  const swapforETH = async () => {
    try {
      if (!isConnected || !address) {
        const notify = () =>
          toast("Please connect your wallet!", { position: "bottom-right" });
        notify();
        return;
      }

      // Get Receivable Presale Tokens using USDT
      const ethAmountFromInput = paymentAmount;
      const ethAmountInWei = await web3Connect.utils.toWei(
        ethAmountFromInput.toString(),
        "ether"
      );
      const ethEquivalent = await initPresaleContract.methods
        .getReceivablePresaleTokens(ethAmountInWei, false)
        .call();
      const humanReadableSwapPriceForETH = Number(ethEquivalent) / 10 ** 18;
      console.log("ETH Output Price:", humanReadableSwapPriceForETH);

      // const approveTx = await tokenContract.methods
      //     .approve(
      //         presaleContract,
      //         "10000000000000000000000000000000000"
      //     )
      //     .send({ from: address });
      // if (!approveTx.status) {
      //     console.log("Approval transaction failed!");
      //     return;

      // }

      // Swap with ETH

      const swapTxforETH = await initPresaleContract.methods
        .swapForETH(ethAmountInWei)
        .send({ from: address, value: ethAmountInWei });

      if (swapTxforETH.status) {
        toast("Presale Purchase transaction successful!", {
          position: "bottom-right",
        });
      } else {
        toast("Presale Purchase transaction failed!", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error("Error in buy function:", error);
      const notify = () =>
        toast("An error occurred.", { position: "bottom-right" });
      notify();
    }
  };

  useEffect(() => {
    getWalletData();
  }, [isConnected, address, web3Connect]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const notify = () => toast('Login successfully', { position: 'top-center' });
    // notify();
    setSelectedCurrency(currencies[0].id);
    setPaymentAmount("");
    setTokenAmount(0);
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleMaxClick = () => {
    const maxPayment = 1000;
    setPaymentAmount(maxPayment);
    setTokenAmount(maxPayment * 100);
  };

  const handlePaymentChange = (value: string) => {
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      setPaymentAmount(amount);
      setTokenAmount(amount * 100);
    } else {
      setPaymentAmount("");
      setTokenAmount(0);
    }
  };

  useEffect(() => {
    console.log({ paymentAmount });
    console.log({ web3Connect });
  }, [paymentAmount]);

  return (
    <div className={s.presaleBlock}>
      <form onSubmit={handleSubmit}>
        {/* Currency Selection Buttons as Radio Group */}
        <div className={s.currencySelection}>
          {currencies.map((currency) => (
            <div key={currency.id}>
              <input
                type="radio"
                id={currency.id}
                name="currency"
                value={currency.id}
                checked={selectedCurrency === currency.id}
                onChange={() => setSelectedCurrency(currency.id)}
              />
              <label htmlFor={currency.id}>
                <Icon icon={currency.icon} />
                <span>
                  {currency.name}
                  {currency.label && <small>{currency.label}</small>}
                </span>
              </label>
            </div>
          ))}
        </div>
        {/* {showEthPrice != 0 && (
          <p className="text-white text-base mt-1">ETH Price: {showEthPrice}</p>
        )} */}
        {/* Payment Input Field */}
        <div className={s.inputGroup}>
          <label htmlFor="paymentAmount">
            {t("lable1")}{" "}
            {selectedCurrency === "card"
              ? "Fiat"
              : currencies.find((c) => c.id === selectedCurrency)?.name}{" "}
            {t("lable1-span")}
          </label>
          <div className={s.inputWrap}>
            <input
              type="number"
              id="paymentAmount"
              placeholder={t("placeholder1")}
              value={paymentAmount}
              onChange={(e) => handlePaymentChange(e.target.value)}
            />
            <button type="button" onClick={handleMaxClick}>
              Max
            </button>
            <Icon className={s.tokenIcon} icon={selectedCurrencyIcon} />
          </div>
        </div>

        {/* Token Output Field */}
        <div className={s.inputGroup}>
          <label htmlFor="tokenAmount">{t("label2")}</label>
          <div className={s.inputWrap}>
            <input type="text" id="tokenAmount" value={tokenAmount} readOnly />
            <Image
              width={100}
              height={100}
              src={"/assets/img/icons/WOW.svg"}
              alt="wow"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </div>

        {/* submit button */}
        {typeof paymentAmount === "number" && paymentAmount > 0 && (
          <div className={s.bottomButtonsGroup}>
            <button
              className={s.connect}
              type="submit"
              onClick={() =>
                selectedCurrency === "eth" ? swapforETH() : swapforUSDT()
              }
            >
              {t("submitBtn")}
            </button>
          </div>
        )}

        {/* Connect Wallet Button */}
        <div className="mt-2 mb-3">
          <CustomConnectButton classChanged={s.connect} />
        </div>

        {/* <div className={s.connectWrap}>
                    <ConnectButton />
                </div> */}

        {/* Help and Giveaway Buttons */}
        <div className={s.extraButtons}>
          <a href="#" className="btn">
            <Icon icon="akar-icons:question" />
            {t("hot-to-buy")}
          </a>
          <a href="#" className="btn">
            <Icon icon="akar-icons:gift" />
            {t("giveawayBtn")}
          </a>
        </div>

        {/* Error Link */}
        <div>
          <a href="#">{t("Getting-Error")}</a>
        </div>
      </form>
    </div>
  );
};

export default PresaleForm;
