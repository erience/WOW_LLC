import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "./Brand"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroDEX from "./IntroDEX"
import IntroRealEstate from "./IntroRealEstate"
import HeaderOne from "@/layouts/headers/HeaderOne"
import PartnerArea from "./PartnerArea"
import Tokenomics from "./Tokenomics"

const HomeOne = () => {
    return (
        <div className="home-purple-gradient">
            <HeaderOne />
            <Hero />
            <Brand />
            <IntroRealEstate />
            <IntroDEX />
            <PartnerArea />
            <Tokenomics />
            <FaqArea />
            <FooterOne />
        </div>
    )
}

export default HomeOne
