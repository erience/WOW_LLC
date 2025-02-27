"use client"
import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

const Providers = ({ children }) => {
    const queryClient = new QueryClient();
    const config = getDefaultConfig({
        appName: 'My RainbowKit App',
        projectId: 'e30af1d882ca49dfbdb05141a5951e68',
        chains: [mainnet, sepolia],
        // chains: [mainnet, polygon, optimism, arbitrum, base,],
        ssr: true,
    });

    return (

        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    );
};

export default Providers;
