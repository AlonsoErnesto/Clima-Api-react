import React,{useState,useEffect} from 'react'
import Formulario from './Components/Formulario';
import Header from './Components/Header'
import Clima from './Components/Clima'
import Error from './Components/Error'

function App() {

  const [Busqueda, setBusqueda] = useState({
    
    ciudad:'',
    pais:'',

  })
  console.log(Busqueda)

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false)


  const {ciudad,pais} = Busqueda;

  
  useEffect(() => {
    
    const consultarAPI = async() =>{
      
      if(consultar)
      {
        
        const apiKey = 'cb0dc18f03ed306264eb96c608ad5f97'
        //algunas paginas de hosting necesitara que la API tenga el https
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
        
        const res = await fetch(url);
        const resultado  = await res.json();
        
        setResultado(resultado)
        setConsultar(false);
        
        if(resultado.code === '404')
        {
          setError(true)
        }else {
          setError(false)
        }
      }   
    }
    
    consultarAPI()
    //eslint-disable-next-line
  }, [consultar])
  

  let componente;

  if(error)
  {
    componente = <Error  message="No hay resultados"/>
  }else {
    componente = <Clima resultado={resultado}/>
  }


  return (
    <>
      <Header titulo="Clima React App"/>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
                  <Formulario Busqueda={Busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
