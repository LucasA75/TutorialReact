import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1 className='text-center'>
    Tutorial de Hooks React
    </h1>  
    <div className='row bg-secondary'>
    <button>
    <Link to="/useCallback">useCallback</Link>
    </button>
    <button>
    <Link to="/useState">useState</Link>
    </button>
    <button>
      <Link to="/Prueba">Pagina de Prueba</Link>
    </button>
    </div>
    </div>
  )
}

export default Home