"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import partnerThumb_1 from "@/assets/img/update/client/wow estate.png"
import partnerThumb_2 from "@/assets/img/update/client/WOW Bank.png"
import partnerThumb_3 from "@/assets/img/update/client/Token Locker.png"
import partnerThumb_4 from "@/assets/img/update/client/WOW Ai Wallet.png"
import partnerThumb_5 from "@/assets/img/update/client/Ai-DEX.png"
import partnerThumb_6 from "@/assets/img/update/client/WOW Token Minter.png"
import { useTranslations } from "next-intl";

interface DataType {
    id: number;
    link: string;
    icon: StaticImageData;
    title: JSX.Element;
    desc: JSX.Element;
}[];

const PartnerArea = () => {
    const t = useTranslations('HomePage.IntroDEX.partners');
    const partner_data: DataType[] = [
        {
            id: 1,
            link: "",
            icon: partnerThumb_1,
            title: (<>{t('p1.title')}</>),
            desc: (<>{t('p1.desc')}</>)
        },
        {
            id: 2,
            link: "https://bank.wow.llc",
            icon: partnerThumb_2,
            title: (<>{t('p2.title')}</>),
            desc: (<>{t('p2.desc')}</>)
        },
        {
            id: 3,
            link: "",
            icon: partnerThumb_3,
            title: (<>{t('p3.title')}</>),
            desc: (<>{t('p3.desc')}</>)
        },
        {
            id: 4,
            link: "",
            icon: partnerThumb_4,
            title: (<>{t('p4.title')}</>),
            desc: (<>{t('p4.desc')}</>)
        },
        {
            id: 5,
            link: "https://dex.wow.llc",
            icon: partnerThumb_5,
            title: (<>{t('p5.title')}</>),
            desc: (<>{t('p5.desc')}</>)
        },
        {
            id: 6,
            link: "",
            icon: partnerThumb_6,
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
                                            <Image src={item.icon} alt="img" layout="intrinsic" width={300} height={200} />
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
