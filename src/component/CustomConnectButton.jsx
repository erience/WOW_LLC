import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const CustomConnectButton = ({ classChanged }) => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {!connected ? (
                            <button className={classChanged ? classChanged : "btn2"} onClick={openConnectModal} type="button">
                                Connect Wallet
                            </button>
                        ) : chain.unsupported || chain.id != 1 ? (
                            <button className={classChanged ? classChanged : "btn2"} onClick={openChainModal} type="button">
                                Wrong Network
                            </button>
                        ) : (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
                                <button onClick={openChainModal} type="button" className="wallet-btn">
                                    {chain.hasIcon && (
                                        <div
                                            style={{
                                                background: chain.iconBackground,
                                                width: 12,
                                                height: 12,
                                                borderRadius: 999,
                                                overflow: "hidden",
                                                marginRight: 4,
                                            }}
                                        >
                                            {chain.iconUrl && <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} style={{ width: 12, height: 12 }} />}
                                        </div>
                                    )}
                                    {chain.name}
                                </button>
                                <button onClick={openAccountModal} type="button" className="wallet-btn">
                                    {account.displayName} {account.displayBalance ? `(${account.displayBalance})` : ""}
                                </button>
                            </div>
                        )}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default CustomConnectButton;
