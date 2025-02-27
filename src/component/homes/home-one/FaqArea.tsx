import Image from "next/image";

import { useTranslations } from "next-intl";

const FaqArea = () => {
    const t = useTranslations('HomePage.FAQ');

    const faq_data = [
        {
            id: 1,
            page: "home_1",
            title: t('questions.q1.title'),
            desc: t('questions.q1.desc'),
        },
        {
            id: 2,
            page: "home_1",
            title: t('questions.q2.title'),
            desc: t('questions.q2.desc'),
        },
        {
            id: 3,
            page: "home_1",
            title: t('questions.q3.title'),
            desc: t('questions.q3.desc', { url: `<a href="http://wow.llc/">wow.llc</a>`, connect: `<strong>Connect Wallet</strong>`, buy: `<strong>Buy Now</strong>` }),
        },
        {
            id: 4,
            page: "home_1",
            title: t('questions.q4.title'),
            desc: t('questions.q4.desc'),
        },
        {
            id: 5,
            page: "home_1",
            title: t('questions.q5.title'),
            desc: t('questions.q5.desc'),
        },
        {
            id: 6,
            page: "home_1",
            title: t('questions.q6.title'),
            desc: t('questions.q6.desc', { url: `<a href="https://wow.llc/contact-us/">https://wow.llc/contact-us/</a>` }),
        },
        {
            id: 7,
            page: "home_1",
            title: t('questions.q7.title'),
            desc: t('questions.q7.desc'),
        },
        {
            id: 8,
            page: "home_1",
            title: t('questions.q8.title'),
            desc: t('questions.q8.desc'),
        },
    ];
    return (
        <div className="pt-140 pb-140 overflow-hidden" id="faqSection">
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-xl-4 text-xl-start">
                        <div className="section-title mb-50">
                            <h2 className="title style2">{t('title')}</h2>
                            <p className="sec-text">{t('tagline')}</p>
                        </div>
                        <div className="faq-thumb mt-60">
                            <Image width={100} height={100} src={"/assets/img/update/normal/1-dark.png"} alt="img" />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faq_data.filter((items) => items.page === "home_1").map((item) => (
                                <div key={item.id} className="accordion-card active">
                                    <div className="accordion-header" id={`collapse-item-${item.id}`}>
                                        <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}`}><span className="number">{item.id}</span>{item.title}</button>
                                    </div>
                                    <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`} aria-labelledby={`collapse-item-${item.id}`} data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="faq-text" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea
