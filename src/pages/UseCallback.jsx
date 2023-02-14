import React,{useState, useCallback} from 'react'
import List from '../components/List'

const UseCallback = () => {

  /* Cual es el problema y porque necesitamps useCallback para solucionarlo?
  
  El problema es que al cuando cambiamos el color se renderiza tambien la funcion getItems ... pero 
  tu diras ya pero que tiene, bueno esto en una pagina grande podria provocar una baja en el rendimiendo
  y lo que busca un programador siempre es OPTIMIZAR y por eso ocuparemos este hook para solucionar
  el problema 
  */


  /* Esta funcion se renderiza cada vez que cambiamos un parametro hasta cuando cambiamos de color */
    
  /* const getItems = () =>{
    return [number, number + 1, number + 2]
  } */

  /* Puedes probar esto comentando la funcion de abajo y descomentando esta  */

  /* Que hace el useCallback ? 
  Es renderizar el codigo solamente si los parametros cambian , 
  no porque se apreto cierta cosa va a renderizar todo*/


    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)

    const getItems = useCallback(() =>{
        return [number, number + 1, number + 2]
    },[number])

    /* Bueno y porque no puedo ocupar useMemo en este caso , cual es la diferencia??? 
    La principal diferencia es que useCallback te renderiza la FUNCION cuando el parametro cambia, y esto nos 
    permite reutilizar la funcion mas adelante en el codigo , en cambio useMemo renderiza solamente
    el return de la funcion
    */

    /* Ademas un extra que tenemos con useCallback es que podemos agregar un parametro en la () para cambiar algun valor 
    cosa que no se puede hacer en useMemo ya que solo renderiza el return
    
    Ejemplo
    
    
    const getItems = useCallback((incrementable) =>{
        return [number + incrementable, number + 1 + incrementable, number + 2 + incrementable]
    },[number])
    
    y en este caso tambien en List.js donde llamamos a esta funcion getitems(Aqui colocariamos el incrementable EJ: 1)
    y nos actualizaria la funcion .... maravillosa juegada!!!
    
    
    */
    
    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }



  return (
    <div style={theme}>
    <h1 className='text-center p-4'>Vamos a aprender como ocupar el UseCallback</h1>
    <h3>Necesitas abrir la consola y abrir el codigo</h3>
    <input
    type="number"
    value={number}
    onChange={e => setNumber(parseInt(e.target.value))}
    />
    <button
    onClick={() => setDark(cambioEstado => !cambioEstado)}
    >
        Cambiar el tema
    </button>
    <List getItems={getItems} />
    </div>
  )
}

export default UseCallback