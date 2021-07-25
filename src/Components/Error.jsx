import React from 'react';
import PropTypes from  'prop-types'


const Error = (props) => {

    const { message} = props
    return ( 
        <div>
             <p className="red darken-4 error">{message}dsds</p> 
        </div>
     );
}
 
Error.propTypes = {
    message:PropTypes.string.isRequired
}


export default Error;