import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx";  //importar el componente 
import { Card } from "./Card.jsx"

import CardMenu from "./CardMenu.jsx";

//create your first component
const Home = () => {
	//la logica va en este espacio (JS)

	const recetas = [
		{ nombre: "pasta", descripcion: "comida italiana tradicional" },
		{ nombre: "sopa", descripcion: "comida caliente nutritiva" },
		{ nombre: "ensalada", descripcion: "ensalada de tomate" },
		{ nombre: "helado", descripcion: "helado de chocolate" }
	]



	//luego del return va la parte que ve el usuario 
	return (
		<div>
			<Navbar />
			<h3>Cartas </h3>
			<Card />
			<Card />
			<Card />
			<Card />

			{/* llamar al componente */}


			<h2>landing page</h2>
			<h3>clase 2 de react</h3>

			{/* esto es la forma en que paso informacion por props, pero no es la mejor */}
			
			{/* <CardMenu nombre= "pasta" descripcion= "comida italiana tradicional"/>
		        <CardMenu nombre= "sopa" descripcion= "plato nutritivo caliente"/> */}


			{/* segunda forma */}
			{/* CREAMOS LA LOGICA PARA MAPEAR LAS CARTAS USANDO MAP */}


			{recetas.map((item, index) => (
				<CardMenu
				    key={index} 
					nombre={item.nombre}
					descripcion={item.descripcion} 
				 />
			))}


		</div>
	);
};

export default Home;