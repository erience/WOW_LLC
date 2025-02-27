"use client"

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Tokenomics = () => {
    const t = useTranslations('HomePage.IntroRealEstate');

    const [isCopied, setIsCopied] = useState(false);
    const textToCopy = '0x8C5d1963E41EB351495D6a7a068052103A47B40c';

    const handleCopy = async () => {
        try {
            // Try using navigator.clipboard if available
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(textToCopy);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            } else {
                // Fallback to document.execCommand for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    interface DataType {
        id: number;
        title: string;
        count: string;
    }

    const category_data1: DataType[] = [
        { id: 1, title: "Pre-Sale", count: "18%" },
        { id: 2, title: "Givaway", count: "2%" },
        { id: 1, title: "Team", count: "5%" },
        { id: 1, title: "Marketing", count: "5%" },
        { id: 1, title: "Partner", count: "5%" },
        { id: 1, title: "KOL Partner", count: "5%" },
        { id: 1, title: "Staking Reward", count: "10%" },
        { id: 1, title: "Liquidity DEX", count: "10%" },
        { id: 1, title: "Liquidity CEX", count: "10%" },
        { id: 1, title: "2025 - 1st Burning", count: "5%" },
        { id: 1, title: "2026 - 2nd Burning", count: "5%" },
        { id: 1, title: "2027 - 3rd Burning", count: "5%" },
        { id: 1, title: "2028 - 4th Burning", count: "5%" },
        { id: 1, title: "2029 - 5th Burning", count: "5%" },
        { id: 1, title: "2030 - 6th Burning", count: "5%" },
    ]

    return (
        <div className="pt-110 overflow-hidden bg-black2 tokenomics" id="tokenomicsSection">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title mb-45">
                            <h2 className="title style2">Tokenomics</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-12 col-12">
                        <div className="box-root">
                            <div>
                                <span>Name / Symbol: </span>&nbsp;WOW
                            </div>
                            <div>
                                <span>Total Supply: &nbsp;</span>1,000,000,000
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10">
                                <div className="box-root Typography"><span>Contract Address: &nbsp;</span> <small>0x8C5d1963E41EB351495D6a7a068052103A47B40c</small>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="box-root button">
                                    <button onClick={handleCopy}>
                                        {isCopied ?
                                            "Copied!"
                                            :
                                            "COPY"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-12">
                        <div className="row schedules">
                            <div className="col-lg-4">
                                <div className="blog-widget">
                                    <div className="sidebar-cat-list">
                                        <ul className="list-wrap">
                                            {category_data1.slice(0, 4).map((category, index) => (
                                                <li key={index}><p>{category.title} <span>{category.count}</span></p></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="blog-widget">
                                    <div className="sidebar-cat-list">
                                        <ul className="list-wrap">
                                            {category_data1.slice(4, 9).map((category, index) => (
                                                <li key={index}><p>{category.title} <span>{category.count}</span></p></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="blog-widget">
                                    <h4 className="widget-title">Burning&nbsp; Schedule</h4>
                                    <div className="sidebar-cat-list">
                                        <ul className="list-wrap">
                                            {category_data1.slice(9, 15).map((category, index) => (
                                                <li key={index}><p >{category.title} <span>{category.count}</span></p></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
