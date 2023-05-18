import { ReactNode } from "react"

type TextType = "text1" | "text2"

interface TextProps {
    type?: TextType
    children?: ReactNode

}


export const Text = ({ type = "text1", children }: TextProps) => {
    return (<>
        <div className={`text ${type}`}>
            {children}
        </div>





    </>)
}