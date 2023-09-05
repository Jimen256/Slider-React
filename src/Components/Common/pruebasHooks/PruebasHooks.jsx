import { useState, useEffect } from "react"


const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{

       setImg(arr[contador])

    }, [contador] )
    
    console.log("Me ejecute tantas veces como se renderiza el componente")

  return (
    <div>
        <h4>{contador}</h4>
        <button style={{
          
        }}
        >Izquierda</button>
        <button onClick={ ()=> setContador( contador + 1 ) }>Derecha</button>

        <img src={img} alt="" />
    </div>
   
  )
}

export default PruebasHooks
