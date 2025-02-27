import Image from "next/image";

import intro_thumb from "@/assets/img/update/client/wow estate.png";
import { useTranslations } from "next-intl";

interface DataType {
    txt: string;
    ans: JSX.Element;
}[];


const IntroRealEstate = () => {
    const t = useTranslations('HomePage.IntroRealEstate');

    const intro_data: DataType[] = [
        {
            txt: t('Q1.txt'),
            ans: (<>{t('Q1.ans')}</>),
        },
        {
            txt: t('Q2.txt'),
            ans: (<>{t('Q2.ans')}</>),
        },
        {
            txt: t('Q3.txt'),
            ans: (<>{t('Q3.ans')}</>),
        },
        {
            txt: t('Q4.txt'),
            ans: (<>{t('Q4.ans')}</>),
        },
        {
            txt: t('Q5.txt'),
            ans: (<>{t('Q5.ans')}</>),
        },
        {
            txt: t('Q6.txt'),
            ans: (<>{t('Q6.ans')}</>),
        },
    ]

    return (
        <div className="pt-130 overflow-hidden bg-black2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title mb-45">
                            <h2 className="title style2">{t('title')}</h2>
                            {/* <p className="sec-text">{t('tagline')}</p> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        {/* {intro_data.map((item) => (
                            <div key={item.id} className="intro-wrap">
                                <h6 className="intro-wrap-title">{item.title}</h6>
                                <p className="intro-wrap-text">{item.desc}</p>
                            </div>
                        ))} */}
                        {intro_data.slice(0, 5).map((item, index) => (
                            <div key={index} className="intro-wrap">
                                <h6 className="intro-wrap-title">{item.txt} <span>{item.ans}</span></h6>
                            </div>
                        ))}

                    </div>
                    <div className="col-xl-6">
                        <div className="intro-thumb1 alltuchtopdown">
                            <Image src={intro_thumb} alt="img" />
                        </div>
                        {intro_data.slice(5, 6).map((item, index) => (
                            <div key={index} className="intro-wrap mt-70">
                                <h6 className="intro-wrap-title">{item.txt} <span>{item.ans}</span></h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroRealEstate
