"use client";
import { useTranslations } from "next-intl";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
// import menu_data from "../../../data/MenuData";

const NavMenu = () => {
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    const t = useTranslations("Header");

    interface MenuItem {
        id: number;
        page: string;
        title: string;
        link: string;
        has_dropdown: boolean;
        sub_menus?: {
            link: string;
            title: string;
        }[];
    }[];

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
            {menu_data.filter((items) => items.page === "nav_1").map((menu: any) => (
                <li key={menu.id}
                    className={menu.has_dropdown ? "menu-item-has-children" : ""}
                >
                    <Link href={menu.link}
                        className={`section-link ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""} ${menu.link === "" && "tool-tip"}`}>
                        {menu.link === "" && <span>Coming Soon</span>}
                        {menu.title}
                    </Link>

                    {menu.has_dropdown && (
                        <>
                            {menu.sub_menus && (
                                <ul className="sub-menu">
                                    {menu.sub_menus.map((sub_m: any, i: any) => (
                                        <li key={i}>
                                            <Link
                                                href={sub_m.link}
                                                className={sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}>
                                                {sub_m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
