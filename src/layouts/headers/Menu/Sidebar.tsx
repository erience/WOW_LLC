"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";


const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link href="/"><Image width={100} height={100} src={"/assets/img/logo/logo.svg"} alt="Logo" /><span>WOW</span></Link>
                    </div>
                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive} />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                    fill="currentColor"></path>
                            </svg></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar
