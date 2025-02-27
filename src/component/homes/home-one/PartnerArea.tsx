"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

interface DataType {
    id: number;
    link: string;
    icon: StaticImageData | string;
    title: JSX.Element;
    desc: JSX.Element;
}[];

const PartnerArea = () => {
    const t = useTranslations('HomePage.IntroDEX.partners');
    const partner_data: DataType[] = [
        {
            id: 1,
            link: "",
            icon: "/assets/img/update/client/wow estate.png",
            title: (<>{t('p1.title')}</>),
            desc: (<>{t('p1.desc')}</>)
        },
        {
            id: 2,
            link: "https://bank.wow.llc",
            icon: "/assets/img/update/client/WOW Bank.png",
            title: (<>{t('p2.title')}</>),
            desc: (<>{t('p2.desc')}</>)
        },
        {
            id: 3,
            link: "",
            icon: "/assets/img/update/client/Token Locker.png",
            title: (<>{t('p3.title')}</>),
            desc: (<>{t('p3.desc')}</>)
        },
        {
            id: 4,
            link: "",
            icon: "/assets/img/update/client/WOW Ai Wallet.png",
            title: (<>{t('p4.title')}</>),
            desc: (<>{t('p4.desc')}</>)
        },
        {
            id: 5,
            link: "https://dex.wow.llc",
            icon: "/assets/img/update/client/Ai-DEX.png",
            title: (<>{t('p5.title')}</>),
            desc: (<>{t('p5.desc')}</>)
        },
        {
            id: 6,
            link: "",
            icon: "/assets/img/update/client/WOW Token Minter.png",
            title: (<>{t('p6.title')}</>),
            desc: (<>{t('p6.desc')}</>)
        },
    ];
    return (
        <div className="pt-100 bg-black2 pb-20">
            <div className="container  sm-container">
                <div className="slider-area">
                    <div className="row partner-slider1">
                        {partner_data.map((item) => (
                            <div key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                                <Link href={item.link} target="_blank">
                                    <div className="partner-card">
                                        <div className="partner-card-img">
                                            <Image width={100} height={100} src={item.icon} alt="img" layout="intrinsic" />
                                        </div>
                                        <p className="partner-card-text">{item.title}</p>
                                        <span>{item.desc}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerArea
