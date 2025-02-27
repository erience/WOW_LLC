interface DataType {
  id: number;
  page: string;
  title: string;
  desc: string;
}[];

const faq_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    title: "What is WOW?",
    desc: "WOW LLC is a blockchain platform enabling the tokenization of real-world assets. Our ecosystem provides tools to tokenize, invest in, and manage assets like real estate, precious metals, and other commodities, ensuring transparency and efficiency through blockchain technology.",
  },
  {
    id: 2,
    page: "home_1",
    title: "Which assets can be tokenized with WOW LLC?",
    desc: "WOW LLC supports the tokenization of diverse assets, including real estate, art, gold, and corporate bonds. Our platform offers the flexibility to bring nearly any valuable asset onto the blockchain.",
  },
  {
    id: 3,
    page: "home_1",
    title: "How to Start Investing with WOW LLC?",
    desc: "To begin investing with WOW LLC, visit wow.llc. Click Connect Wallet and connect using your DeFi Web3 wallet; we recommend MetaMask or Trust Wallet. Ensure you are connected to the Ethereum Chain (ERC20) and have sufficient ETH in your wallet. Select your preferred currency (ETH, USDT, or USDC), input the desired purchase amount, and click Buy Now. Complete the transaction within your wallet.",
  },
  {
    id: 4,
    page: "home_1",
    title: "What is the Purpose of the WOW Token?",
    desc: "WOW is the symbol of WOW LLC's token. The WOW token is used for governance within the WOW LLC ecosystem..",
  },
  {
    id: 5,
    page: "home_1",
    title: "How will WOW Tokens be delivered to me?",
    desc: "WOW LLC (WOW) tokens are transferred to your wallet in real-time. To view the amount of tokens in your wallet, please add WOW as a custom token.",
  },
  {
    id: 6,
    page: "home_1",
    title: "How can I get in touch with the WOW LLC team?",
    desc: "You can reach out to us through our contact form: https://wow.llc/contact-us/ or by emailing us at: support@wow.llc.",
  },
  {
    id: 7,
    page: "home_1",
    title: "How can I sell my WOW tokens?",
    desc: "As we are currently in presale, you cannot sell or transfer your tokens. Once WOW LLC goes live, users will be able to trade them freely on Uniswap.",
  },
  {
    id: 8,
    page: "home_1",
    title: "What should I do if my wallet is hacked?",
    desc: "Unfortunately, there's little we can do in this case. Always remember: Never share your Seed Phrase or Private Key with anyone. These are highly sensitive details and should remain secure at all times.",
  }
];

export default faq_data;
