
import { ReactNode } from "react"

type ContainerType="Container"

interface ContainerProps{
    type?:ContainerType
    children?:ReactNode
    className?:string


}

export const Container =({type="Container", children, className=""}:ContainerProps)=>{
return(<>
<div className={`Container ${type}`}>
    {children}
    

</div>



</>)
}