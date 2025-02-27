import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl';

import hero_thumb from "@/assets/img/update/hero/hero-1-1.jpg"
import PresaleForm from "@/component/forms/PresaleForm"
import { Button } from "@/component/Button";

const Hero = () => {
    const t = useTranslations('HomePage');
    return (
        <div className="hero-wrapper hero-1">
            <div className="hero-bg-gradient">
            </div>
            <div className="ripple-shape">
                <span className="ripple-1"></span>
                <span className="ripple-2"></span>
                <span className="ripple-3"></span>
                <span className="ripple-4"></span>
                <span className="ripple-5"></span>
            </div>

            <div className="container">
                <div className="hero-style1">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-3">
                            <div className="hero-thumb alltuchtopdown">
                                <Image src={hero_thumb} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1 className="hero-title " data-text={t('title')}>
                                <span>W</span>orld <span>O</span>f <span>W</span>eb3
                            </h1>
                            <h4 className="hero-tagline">{t('tagline')}</h4>
                            <p className="hero-paragraph">{t('desc')}</p>
                            <div className="btn-wrap">
                                <button className="btn btn2 tool-tip">
                                    <span>Coming soon</span>
                                    {t('button1')}
                                </button>
                                <button className="btn btn-two tool-tip">
                                    <span>Coming soon</span>
                                    {t('button2')}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="hero-countdown-wrap">
                    <h2 className="hero-countdown-wrap-title wow"><span>WOW</span> {t('countdown.title')}</h2>
                    <h2 className="hero-countdown-wrap-title Stage">{t('countdown.title2')}</h2>
                    <p className="hero-countdown-line">{t('countdown.line1')}</p>
                    <p className="hero-countdown-line">{t('countdown.line2')}</p>
                    <p className="hero-countdown-line">{t('countdown.line3')}</p>
                    {/* <ul className="skill-feature_list">
                        <li><span>{t('countdown.skill-feature_list.line1')}</span> {t('countdown.skill-feature_list.line2')}</li>
                        <li><span>{t('countdown.skill-feature_list.line3')}</span> {t('countdown.skill-feature_list.line4')}</li>
                        <li><h4>ICO</h4></li>
                    </ul> */}
                    <div className="skill-feature">
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "80%" }}>
                            </div>
                        </div>
                        {/* <div className="progress-value-max">100 Min $</div> */}
                    </div>
                    {/* <ul className="skill-feature_list style2">
                        <li>7.75 Min</li>
                        <li>1.5 Min</li>
                        <li>140,000 $ {t('countdown.skill-feature_list.chosen')}</li>
                    </ul> */}

                    <PresaleForm />
                </div>
            </div>
        </div>
    )
}

export default Hero
