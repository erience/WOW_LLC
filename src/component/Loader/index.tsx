import Image from "next/image";

export const Loader = () => {
    return (
        <div className="preloader">
            <Image width={100} height={100} src={"/assets/img/logo/logo.svg"} alt="preloader icon" />
        </div>
    );
};
