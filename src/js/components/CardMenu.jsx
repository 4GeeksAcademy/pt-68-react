import React from "react";


//este componente trae cartas con informacion diferente 



//dejo comentado el primer ejemplo 

// const CardMenu = ({nombre, descripcion}) => {

//     return (

//         <div>

//             <div className="card" style={{width: "18rem"}}>
//                 <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{nombre}</h5>
//                         <p className="card-text">{descripcion}</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//             </div>


//         </div>
//     )
// }

// export default CardMenu;


//segundo ejemplo USANDO PROPS :
const CardMenu = (props) => {

    return (

        <div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.descripcion}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>


        </div>
    )
}

export default CardMenu;