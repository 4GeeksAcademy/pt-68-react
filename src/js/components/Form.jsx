import React, { useState } from "react";


const Form = () => {

const [email, setEmail]= useState("") //paso 1 creo el estado 
const [password, setPassword]= useState("")

//cuando son muchos valores en el formulario puede ser asi:
// const [data, setData]=useState({
//     email:"",
//     paswword:""
// })

function handleEmail(event) {
    // console.log("funciona");
    // console.log(event.target.value);
    setEmail(event.target.value)
        
}


// function handlePassword(event) {
//     console.log(event.target.value);
//     setPassword(event.target.value)
    
// }



function sendData(event) {

    // console.log("funciona");
    event.preventDefault()

    console.log("email :", email);
    console.log("password :", password);
    
    alert(`Enviando email: ${email} y contraseña: ${password}`)
}
    
    return (
        <div className="container">
            <h3>Login</h3>
            <form onSubmit={sendData}>

                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=> setPassword(event.target.value)} value={password} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>

    )
}

export default Form;