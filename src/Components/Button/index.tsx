import { ReactNode } from "react"

type ButtonType = "Button"

interface ButtonProps {
    type?: ButtonType
    children?: ReactNode
    Onclick?: () => void
    className?: string

}

export const Button = ({ type = "Button", children, Onclick, className = "" }: ButtonProps) => {
    return (
        <button className={`button ${type} ${className}`}
        onClick={Onclick}>
        {children}

    </button>

    )
}