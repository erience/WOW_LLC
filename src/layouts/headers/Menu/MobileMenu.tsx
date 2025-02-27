"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// internal

const MobileMenus = ({ setIsActive }: any) => {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: any) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: any) => {
        return currentRoute === subMenuLink;
    };

    const closeSidebar = () => {
        setIsActive(false);
    };


    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    const t = useTranslations("Header");
    interface MenuItem {
        id: number;
        page: string;
        has_dropdown: boolean;
        title: string;
        link: string;
        sub_menus?: { title: string; link: string }[];  // Optional sub_menus
    }
    const menu_data: MenuItem[] = [
        {
            id: 1,
            page: "nav_1",
            has_dropdown: false,
            title: t("Ecosystem"),
            link: "/#ecosystemSection",
        },
        {
            id: 2,
            page: "nav_1",
            has_dropdown: false,
            title: t("Tokenomics"),
            link: "/#tokenomicsSection",
        },
        {
            id: 3,
            page: "nav_1",
            has_dropdown: false,
            title: t("Whitepaper"),
            link: "",
        },
        {
            id: 4,
            page: "nav_1",
            has_dropdown: false,
            title: t("Win-3M"),
            link: "",
        },
        {
            id: 5,
            page: "nav_1",
            has_dropdown: false,
            title: t("Faq"),
            link: "/#faqSection",
        }
    ];

    return (
        <ul className="navigation">
            {menu_data.filter((items) => items.page === "nav_1").map((menu, i) => (
                <React.Fragment key={i}>
                    {menu.has_dropdown && (
                        <li className="menu-item-has-children">
                            <Link href={menu.link} onClick={closeSidebar}
                                className={` ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                                {menu.title}
                            </Link>
                            <div
                                className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                                onClick={() => openMobileMenu(menu.title)} >
                                <i className={`${navTitle === menu.title ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                            </div>
                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                                    {menu.sub_menus.map((sub, index) => (
                                        <li key={index}>
                                            <Link href={sub.link} onClick={closeSidebar}
                                                className={sub.link && isSubMenuItemActive(sub.link) ? "active" : ""}>
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                    {!menu.has_dropdown && (
                        <li className="menu-item-has-children">
                            <Link onClick={closeSidebar} href={menu.link} className={`${currentRoute === menu.link ? "active" : ""} ${menu.link === "" && "tool-tip"}`}>
                                {menu.link === "" && <span>Coming Soon</span>}
                                {menu.title}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}

export default MobileMenus;
