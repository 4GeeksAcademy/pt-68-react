import React, {useState, useEffect} from "react";

export const RickApi = () => {


//estado para guardar el array pe dersonajes (inicialmente esta vacio)
const [personajes, setPersonajes]=useState([])

const obtenerPersonajes=()=>{
//GUARDO LA URL EN UN ESPACIO DE MEMORIA
    const API_URL = "https://rickandmortyapi.com/api/character"


    fetch(API_URL)
    .then(response => response.json()) //conviuerte la respuesta a un formato JSON
    .then(data => {setPersonajes(data.results)})  //toma los datos para mostrar en el array
    .catch(error => {console.error("Hubo un problema al obtener los personajes", error); //imprimir el error enn la consola para depurar
    })
}

//      useEffect(()=>{
    //    aqui va el codigo que hace algo (ejemplo el fetch)
//       },[ cuando se repite, si esta vacio se ejecuta solo una vez al cargar la pagina, si tiene un dato se ejecuta cada vez que ese dato cambie ])


useEffect(()=>{
    obtenerPersonajes()
},[])


    return (
        <div>
            <h1>Rick and Morty</h1>

            <ol>
            {personajes.map(personaje =>(
                <li key={personaje.id}> Nombre: {personaje.name} Especie: {personaje.species}</li>
            ))}
            </ol>
        </div>
    )

}
