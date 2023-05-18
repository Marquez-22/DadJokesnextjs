import { useState } from "react"
import { Button } from "../Button"
import { Caja } from "../Caja"
import { Text } from '@/Components/Text'


type CajaTextoButtonType = "btn"

interface CajaTextoButtonProps {
    type?: CajaTextoButtonType

}

export const CajaTextoButton = ({ type = "btn" }: CajaTextoButtonProps) => {
    const LISTATEXTO = [ //funcion para cambiar texto
        "The Swiss must ve been pretty confident in their chances of victory if they included a corkscrew in their army knife.",
        "What time did the man go to the dentist? Tooth hurt-y.",
        "What did the shy pebble wish for? That she was a little boulder.",
        "What did the judge say to the dentist? Do you swear to pull the tooth, the whole tooth and nothing but the tooth?",
        "Why is there always a gate around cemeteries? Because people are always dying to get in.",
        "A beekeeper was indicted after he confessed to years of stealing at work. They charged him with emBEEzlement",
        "A butcher accidentally backed into his meat grinder and got a little behind in his work that day."
    ]
    const catidadDeTextos = LISTATEXTO.length//lengt retorna la cantidad de elementos que hay 
    const [currentTexto, setCurrentTexto] = useState(0)

    const CambiarTexto = () => {
        setCurrentTexto((pre) => {
            if (pre + 1 >= catidadDeTextos) {
                //regrese al inicio
                return 0
            }
            return pre + 1
        })
    }

    return (<>
        <div className={`btn ${type}`}>
            <Caja>
                <Text
                    type="text2"
                > {"Don't Laugh Challenge"}</Text>
                <Text>
                    {LISTATEXTO[currentTexto]}
                </Text>
                <Button Onclick={CambiarTexto}>
                    <h1> Get Another Joker</h1>

                </Button>
            </Caja>
        </div>
    </>)
}