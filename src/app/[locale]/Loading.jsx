"use client";
import logo_1 from "@/assets/img/logo/logo.svg";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="preloader">
            <Image src={logo_1} alt="preloader icon" />
        </div>
    )
}
