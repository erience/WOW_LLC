import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import Flag from 'react-world-flags'
import globeLogo from "@/assets/img/icons/globe.svg";
import Image from "next/image";


export default function LocalSwitcher() {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Ref to the dropdown container
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Function to handle clicks outside the dropdown
    useEffect(() => {
        function handleOutsideClickOrScroll(event) {
            if (
                (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
                (buttonRef.current && !buttonRef.current.contains(event.target))
            ) {
                setDropdownOpen(false);
            }
        }

        function handleScroll() {
            setDropdownOpen(false);
        }

        // Add event listeners
        document.addEventListener("mousedown", handleOutsideClickOrScroll);
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Cleanup event listeners
            document.removeEventListener("mousedown", handleOutsideClickOrScroll);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function onLocaleClick(newLocale) {
        startTransition(() => {
            router.replace(
                { pathname, params },
                { locale: newLocale }
            );
            setDropdownOpen(false);
        });
    }

    return (
        <div className="local-switcher">
            <button
                ref={buttonRef}
                className="locale-button"
                onClick={() => {
                    console.log("Button clicked!");
                    setDropdownOpen((prev) => !prev);
                }}
                disabled={isPending}
            >
                <Image src={globeLogo} alt="" />&nbsp; {locale.toUpperCase()}
            </button>
            {isDropdownOpen && !isPending && (
                <ul className="locale-list" ref={dropdownRef}>
                    {routing.locales.map((cur) => {
                        return (
                            <li
                                key={cur}
                                className={`locale-option ${locale === cur ? "active" : ""}`}
                                onClick={() => onLocaleClick(cur)}
                            >
                                <Flag code={cur === "en" ? "GB" : cur.toUpperCase()} className="flag-icon" /> {cur.toUpperCase()}{locale === cur ? <i className="fa-solid fa-xmark" style={{ color: "#fff" }}></i> : ""}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}
