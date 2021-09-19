import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <div className="spin">
            <img src={spinner} style={{width:'200px' , margin:'auto' , dispalay:'block'}} alt='Loading..' />
       </div>
    )
}

export default Spinner
