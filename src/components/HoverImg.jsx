import React from 'react'
import img from './../Img/PDP_EFM_Bottle.jpg'

function HoverImg(props) {
    
    return (
        <div className='d-flex ImgCard flex-column'>
            <img className='ImHyt' src={props.img} alt="" srcset="" />
            <spna className='styI'>{props.span1}</spna>
            <h6 className='fs'>{props.h3}</h6>
            <spna>{props.span2}</spna>
        </div>
    )
}

export default HoverImg
