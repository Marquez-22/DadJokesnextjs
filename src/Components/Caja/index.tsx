import { ReactNode } from "react"

type CajaType = "caja"

interface CajaProps {
    type?: CajaType
    children?: ReactNode




}


export const Caja = ({ children, type = "caja" }: CajaProps) => {
    return (<>
        <div className="contentCaja">

            <div className={`Caja ${type}`}>
                {children}


            </div>
        </div>


    </>)
}