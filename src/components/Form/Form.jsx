import React, { useState } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button"

import Styles from "./Form.module.css"
import ButtonStyles from "../Button/Button.module.css";

function Formulario({ texto, button }) {

    const [conta, setConta] = useState("")
    const [gorjeta, setGojeta] = useState("")
    const [resultado, setResultado] = useState("")
    const [mensagem, setMensagem] = useState("")

    function valueConta(e) {
        setConta(e.target.value)
    }

    function valueGorjeta(e) {
        setGojeta(e.target.value)
    }

    const calcular = (e) => {
        e.preventDefault()

        const valorConta = parseFloat(conta)
        const valorGorjeta = parseFloat(gorjeta)

        if (isNaN(valorConta)) {
            setMensagem("Preencha o campo Conta")
            setResultado("")
        } else if (isNaN(valorGorjeta)) {
            setMensagem("Preencha o campo Gorjeta")
            setResultado("")
        } else {
            const resultado = valorConta + valorGorjeta
            setResultado(resultado)
            setMensagem("")
        }
    }

    function resetValue(e) {
        e.preventDefault()
        setConta("")
        setGojeta("")
        setResultado("")
        setMensagem("")
    }

    return (
        <form>
            <div className={Styles.FormContainer}>
                <Label texto="Conta"/>
                <Input
                    value={conta}
                    onChange={valueConta}
                />
            </div>
            <div className={Styles.FormContainer}>
                <Label texto="Gorjeta" />
                <Input 
                    value={gorjeta}
                    onChange={valueGorjeta}
                />
            </div>
            <div className={Styles.FormBunttons}>
                <Button 
                    button="RESETE" 
                    className={ButtonStyles.greenButton}
                    onClick={resetValue}
                />
                <Button 
                    button="CALCULAR" 
                    className={ButtonStyles.whiteButton} 
                    onClick={calcular}
                />
            </div>
            <div className={Styles.FormContainer}>
                <Label texto="Total a Pagar" />
                <span>{mensagem !== "" ? mensagem : resultado}</span>
            </div>
        </form>
    )
}

export default Formulario