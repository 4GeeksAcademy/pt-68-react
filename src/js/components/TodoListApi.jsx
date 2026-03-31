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
                if(response.status === 404){
                    crearUsuario()
                }
                return response.json()
            }) 
            .then(data => { setLista(data.todos) })  //toma los datos para mostrar en el array
            .catch(error => {
                console.error("Hubo un problema al obtener la lista de tareas", error); //imprimir el error en la consola para depurar
            })
    }

    useEffect(() => {
        //onload
        obtenerLista()
    }, [])


    return (
        <div>
            <h1>Todo List Astrid</h1>

            <ol>
                {lista.map((item) => (
                    <li key={item.id}> {item.label} </li>
                ))}
            </ol>
        </div>
    )

}
