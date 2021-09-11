import React from 'react'

function IngredLogo(props) {
    return (
        <div className='col-sm-12 col-md-2 mx-md-auto d-flex flex-column'>
            <span style={{fontWeight:40+'px'}} class="material-icons text-md-center">
                {props.src}
            </span>
            <h5 className='text-md-center mt-3 mt-md-2'>{props.text}</h5>
        </div>
    )
}

export default IngredLogo
