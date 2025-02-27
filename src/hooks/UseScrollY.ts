"use client"
import { useEffect, useState } from "react";

interface ScrollState {
    opacityValue: number;
}

const UseScrollY = (): ScrollState => {
    const [opacityValue, setOpacityValue] = useState(0);
    const [windowScrollValue, setWindowScrollValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setWindowScrollValue(window.scrollY);

            if (windowScrollValue > 10) {
                setOpacityValue(windowScrollValue / 200);

                if (opacityValue > 1) {
                    setOpacityValue(1);
                } else {
                    setOpacityValue(windowScrollValue / 200);
                }
            } else {
                setOpacityValue(0);
            }
        };

        /* eslint-disable */
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowScrollValue]);

    return {
        opacityValue,
    }
}

export default UseScrollY
