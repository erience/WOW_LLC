import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";
import { useTranslations } from "next-intl";

interface DataType {
    id: number;
    title: string;
    desc: JSX.Element;
}[];

const IntroWallet = () => {
    const t = useTranslations('HomePage.IntroWallet');

    const intro_data: DataType[] = [
        {
            id: 1,
            title: t('Q1.txt'),
            desc: (<>{t('Q1.ans')}</>),
        },
        {
            id: 2,
            title: t('Q2.txt'),
            desc: (<>{t('Q2.ans')}</>),
        },
        {
            id: 3,
            title: t('Q3.txt'),
            desc: (<>{t('Q3.ans')}</>),
        },
    ]

    return (
        <div className="pt-130 overflow-hidden bg-black2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title mb-45">
                            <h2 className="title style2">{t('title')}</h2>
                            <p className="sec-text">{t('tagline')}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-4">
                        {intro_data.map((item) => (
                            <div key={item.id} className="intro-wrap">
                                <h6 className="intro-wrap-title">{item.title}</h6>
                                <p className="intro-wrap-text">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-xl-6">
                        <div className="intro-thumb1 alltuchtopdown">
                            <Image src={intro_thumb} alt="img" />
                        </div>
                        <div className="intro-wrap mt-50">
                            <h6 className="intro-wrap-title">{t('Q4.txt')}</h6>
                            <p className="intro-wrap-text">{t('Q4.ans')}</p>
                            <p className="intro-wrap-text mt-40">{t('Q4.line2')}</p>
                            <p className="intro-wrap-text mt-40">{t('Q4.line3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroWallet
