import React, { useState, useEffect, useContext } from "react";  //primer paso: importar el estado 

export const Hook = () => {


    //segundo paso: crear el estado:
    //  [valor_actual, funcion_que_actualiza_el_valor_actual] = useState(valor_inicial)
    const [contador, setContador] = useState(0)
    //"contador" es el valor actual 
    //"setContador" es la funcion que actualiza "contador"
    //useState guarda el valor inicial del estado "(0)""


    const [texto, setTexto] = useState("Seguir")
    const [btnColor, setBtnColor] = useState("btn-success")


    const incrementar = () => {
        //es para cambiar el estado
        //esto hara que el componente se vuelva a renderizar 
        // setContador(contador + 1)

        if (contador === 0) {
            setContador(1)
            setTexto("Dejar de Seguir")
            setBtnColor("btn-danger")
        } else {
            setContador(0)
            setTexto("Seguir")
            setBtnColor("btn-success")
        }

    }

    // También se puede utilizar así: <Fragment></Fragment>
    return (
        <>
            <h2>Contador usando useState</h2>
            {/* esto muestra el valor del estado actual */}
            <p> el contador es {contador} </p>

            {/* el boton llama a la funcion  */}
            <button className={"btn " + btnColor} onClick={incrementar}>{texto}</button>

        </>

    )



}