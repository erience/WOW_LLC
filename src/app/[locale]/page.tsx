"use client"

import HomeOne from "@/component/homes/home-one";
import Wrapper from "@/layouts/Wrapper";
import { useEffect, useState } from "react";
import Loading from './Loading'
import Providers from "./Provider"
import { useAccount } from "wagmi";
import tokenABI from "../app/tokenAbi.json";
import presaleABI from "../app/presaleAbi.json";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3 from "web3";




const Index = () => {

    const networkId = 11155111;
    const rpcURL = "https://eth-sepolia.public.blastapi.io";
    const presaleContract = "0x662d3971a65C1aE591EBa1dC3E1563EedFF673B2";
    const usdtContract = "0x08729dEF63217e41006Deac73688D18d5754277B";
    const { address, isConnected } = useAccount();
    const [web3, setWeb3] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="container mx-auto">
                       
                        <Wrapper>
                            <HomeOne />
                        </Wrapper>
                    </div>
                </>
            )}
        </>
    )
}

export default Index;
