import React from 'react'

function ImgCarouel(props) {
    return (
        <div className='ImgCard'>
            <img className='Imxyt' src={props.img} alt="" srcset="" />
            <p style={{backgroundColor:'#f8f7f9',fontWeight:'600'}} className='p-2 text-center' >{props.text}</p>
        </div>
    )
}

export default ImgCarouel
