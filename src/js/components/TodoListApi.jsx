import React, { useState, useEffect } from "react";

export const TodoListApi = () => {


    //estado (inicialmente esta vacio)
    const [lista, setLista] = useState([])
    const [tarea, setTarea] = useState("")


    //GUARDO LA URL EN UN ESPACIO DE MEMORIA
    const API_URL = "https://playground.4geeks.com/todo"

    const crearUsuario = () => {
        fetch(API_URL + "/users/astrid", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json()) //conviuerte la respuesta a un formato JSON
            .then(data => console.log(data))  //toma los datos para mostrar en la consola
            .catch(error => {
                console.error("Hubo un problema al crear el usuario", error); //imprimir el error en la consola para depurar
            })

    }

    const obtenerLista = () => {
        fetch(API_URL + "/users/astrid")
            .then((response) => {
                if (response.status === 404) {
                    crearUsuario()
                }
                return response.json()
            })
            .then(data => { setLista(data.todos) })  //toma los datos para mostrar en el array
            .catch(error => {
                console.error("Hubo un problema al obtener la lista de tareas", error); //imprimir el error en la consola para depurar
            })
    }

    //funcion que manda la tarea (POST)

    const crearTarea = async (text) => {

        try {
            const response = await fetch(API_URL + "/todos/astrid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                //se envia la tarea en el body como una cadena JSON
                body: JSON.stringify({
                    label: text,
                    is_done: false
                })
            })

            if (!response.ok){
                throw new Error (`Error ${response.status}: No se pudo crear la tarea`)
            }

            const data = await response.json() //conviuerte la respuesta a un formato JSON
            // console.log("tarea creada con exito:", data);
            await obtenerLista()
            

        } catch (error) {
            console.error("Hubo un problema al crear la tarea", error);
        }
     

    }


//funcion para crear la tarea
const inputtext = (e)=>{
    //si la tecla presionada es Enter
    if(e.key==="Enter"){
        crearTarea(tarea) //llamar a la funcion de la API con el texto de la tarea
        setTarea("") //limpiar el campo despues de enviar la tarea 
    }
}



useEffect(() => {
    //onload
    obtenerLista()
}, [])


return (
    <div>
        <h1>Todo List Astrid</h1>

        <input type="text"
            placeholder="Agregar tarea "
            //  actualiza el estado tarea cada vez que el usuario escribe
            onChange={(e) => setTarea(e.target.value)}
            value={tarea} 
            //llama ala funcion que maneja la creacion del estado al presionar una tecla ENTER
            onKeyDown={inputtext}
            />


        {/* crear una condicional que me muestre un texto "no hay tareas" cuando lista.length es igual a 0 o que me muestre la lista */}
        <ol>
            {lista.map((item) => (
                <li key={item.id}> {item.label} </li>
            ))}
        </ol>
    </div>
)

}
