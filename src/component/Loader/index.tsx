import logo_1 from "@/assets/img/logo/logo.svg";
import Image from "next/image";

export const Loader = () => {
    return (
        <div className="preloader">
            <Image src={logo_1} alt="preloader icon" />
        </div>
    );
};
