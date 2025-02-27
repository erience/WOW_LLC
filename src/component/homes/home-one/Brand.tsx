"use client"

import Image from "next/image"
import Link from "next/link";
import Slider from "react-slick";

import brandImg_1 from "@/assets/img/brand/EtherAuthorityLogoDarkBlue.svg"
import brandImg_2 from "@/assets/img/brand/QuillAudits.svg"
import { useTranslations } from "next-intl";

const brand_data = [
    {
        image: brandImg_1,
        link: "https://etherauthority.io/wow-token-smart-contract-audit/"
    },
    {
        image: brandImg_2,
        link: "https://www.quillaudits.com/leaderboard/wow-token"
    }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

const Brand = () => {
    const t = useTranslations('HomePage.Brand');
    return (
        <div className="brand-area2">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-12">
                        <div className="brand-title text-center">
                            <h6 className="title">{t('title')}</h6>
                        </div>
                    </div>
                </div>
                <div className="brand-item-wrap style2">
                    <div className="brand-active2">
                        {brand_data.map((item, i) => (
                            <div key={i}>
                                <Link href={item.link} className="brand-item" target="_blank" rel="noopener noreferrer">
                                    <Image src={item.image} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand;
