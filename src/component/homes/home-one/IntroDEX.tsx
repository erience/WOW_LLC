import Image from "next/image";

import { useTranslations } from "next-intl";

interface DataType {
    id: number;
    title: string;
    desc: JSX.Element;
}[];

const IntroDEX = () => {
    const t = useTranslations('HomePage.IntroDEX');

    return (
        <div className="pt-130 overflow-hidden bg-black2" id="ecosystemSection">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title mb-45">
                            <h2 className="title style2">{t('title')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xl-6">
                        <div className="intro-wrap">
                            <p className="intro-wrap-text">{t('p')} <br /> <br /> {t('p2')}</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="intro-thumb1 alltuchtopdown custom_img">
                            <Image width={100} height={100} src={"/assets/img/update/normal/3d-illustration-bitcoin.png"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroDEX
