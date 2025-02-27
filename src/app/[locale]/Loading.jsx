"use client";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="preloader">
            <Image width={100} height={100} src="/assets/img/logo/logo.svg" alt="preloader icon" style={{
                width: "150px",
                height: "150px"
            }} />
        </div>
    )
}
