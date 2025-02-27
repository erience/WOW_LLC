"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";
import LocalSwitcher from "@/component/LocalSwitcher";

import { useTranslations } from "next-intl";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "@/component/CustomConnectButton";

const HeaderOne = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [offCanvas, setOffCanvas] = useState<boolean>(false);

    const t = useTranslations("Header");

    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`} >
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><Image width={100} height={100} src={"/assets/img/logo/logo.svg"} alt="Logo" /><span>WOW</span></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenu />
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-login"><CustomConnectButton classChanged={false} /></li>
                                            </ul>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <LocalSwitcher />
                                            <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
        </>
    );
}

export default HeaderOne;
