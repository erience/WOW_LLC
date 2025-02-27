"use client"

import useMouse from "@/hooks/useMouse"
import { Icon } from "@iconify/react"
import clsx from "clsx"
import Link from "next/link"
import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    CSSProperties,
    ReactNode,
    useRef
} from "react"
import styles from "./Button.module.scss"

export interface ButtonProps {
    children?: ReactNode
    href?: string
    icon?: string
    className?: string
    type?: "primary" | "secondary"
    onClick?: () => void
}

export const Button = ({
    children,
    href,
    icon,
    className,
    onClick,
    type = "primary",
    ...props
}: ButtonProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useMouse({ ref })

    const light = { "--x": `${x}px`, "--y": `${y}px` } as CSSProperties
    const Content = (
        <>
            <span>{children}</span>
            <div ref={ref} className={styles.light} style={light} />
            {icon && <Icon icon={icon} />}
        </>
    )

    const classNames = clsx(styles.btn, className)

    const attrs = {
        "data-type": type,
        className: classNames,
        onClick
    }

    if (href) {
        return (
            <Link
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                {...attrs}
                href={href}
            >
                {Content}
            </Link>
        )
    } else {
        return (
            <button
                {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
                {...attrs}
            >
                {Content}
            </button>
        )
    }
}
