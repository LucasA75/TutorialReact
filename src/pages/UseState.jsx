import React,{useState} from 'react'

const UseState = () => {

    /* los useState con un array con 2 valores , con el 2 podemos hacer el update del estado*/
    //este valor 5 solamente corre cada vez que el componente se renderiza por lo que esta no es
    /* la manera mas correcta de hacerlo */
    /* const [count,setCount] = useState(5) */

    /* Si Queremos que el State solamente se renderize una vez con el componente podemos agregar
    una arrow function dentro del useState Asi  */

    const [count,setCount] = useState(()=>{
        console.log("esto corre solo una vez de veritas")
        return 5
    })

    /* Esto es muy util si hacemos algo muy complejo para que se optimize al maximo el rendimiento */


    /* IMPORTANTE
    si vamos a tener un objeto en useState NUNCA olvidar de como ocupar bien el setState , ya que
    al setearlo lo que hace es cambiar TODO el estado por lo que hay que ocupar una funcion de JS
    muy util que es ... eso mismo xD
    
    Ejemplo:

    const [state,setState] = useState({count:4 , theme:"blue"})
    //descontruir el objeto
    const count = state.count
    const theme = state.theme

    function decrementCount(){
        setState(prevState =>{
            return {...prevState, count: prevState.count - 1}
        })
    }

    Los 3 puntos lo que hacen es llamar a todo el estado previo del objeto y actualizar solamente 
    esa parte del objeto , Inteligente, no ?


    IMPORTANTE X2

    otra forma tambien que se puede hacer es destructurar el objeto en diferentes States 
    ej:
    const[count, setCount] = useState(4)
    const[theme, setTheme] = useState("blue")

    de hecho asi se ve mas limpio y legible

    
    */
    function decrementable(){
        //Esta es la manera incorrecta de alterar el estado
       
        /* setCount(count - 1) */
       
        //La manera correcta es
        setCount(prevCount => prevCount - 1)
        //Pero por que? proque lo que nos permite la arrowfuncion dentro del setCount es jugar con
        //el anterior estado y no simplemente cambiar el estado , por lo que podemos hacer esto
        setCount(prevCount => prevCount - 1)
        //Al jugar con el estado previo podemos duplicar la funcion y en este caso decrementara el
        //numero en 2 , cosa que con la manera incorrecta no se podria hacer 
    }

    function Aumentable(){
        setCount(prevcount => prevcount+ 1)
    }

  return (
    <div>
    <h1 className='text-center p-4'>Vamos a aprender como ocupar el UseState</h1>
    <div className='d-flex justify-content-center'>
    <button onClick={decrementable}>-</button>
    <span>{count}</span>
    <button onClick={Aumentable}>+</button>
    </div>
    </div>

  )
}

export default UseState