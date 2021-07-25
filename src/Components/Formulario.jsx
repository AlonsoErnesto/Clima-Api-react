import React,{useState} from 'react';
import PropTypes from 'prop-types'


const Formulario = (props) => {

    const {setBusqueda,Busqueda,setConsultar } = props;


    //  ESTADOS
   const [busqueda, setbusqueda] = useState({
       ciudad:'',
       pais:''
   })

   const { ciudad, pais } = busqueda;
   const [error, setError] = useState(false)

   const handleChange = e => {
       setbusqueda({
           ...busqueda,
           [e.target.name] : e.target.value
       })
       console.log(busqueda)
   }

   const onSubmit = e => {
       e.preventDefault();

       if(!ciudad || !pais)
       {
           setError(true)
           return;
       }else {
        setError(false)
        setConsultar(true);
        setBusqueda(busqueda)
       }
   }

    return ( 
        <form>
            {error ? <p className="red darken-4 error">Todos los campos son hobligatorios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">    
                    Ciudad:
                </label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais}  onChange={handleChange}>
                    <option value="">
                        --- Seleccione un pais ---
                    </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais:</label>  
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit" 
                    onClick={onSubmit} 
                    value="Enviar" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"/>
            </div>
        </form>
     );
}
 
Formulario.propTypes = {
    setBusqueda: PropTypes.func.isRequired, 
    Busqueda : PropTypes.object.isRequired,
    setConsultar : PropTypes.func.isRequired
}

export default Formulario;