import React from 'react'
import img from './../Img/ritual-image-1578433491042.jpeg'
import img2 from './../Img/ritual-image-1579909053449.jpeg'
import img3 from './../Img/ig-3.jpg'
import img4 from './../Img/IMG_7343.jpg'
function FourImG() {
    return (
        <>
            <div className='text-center'>
                <h3 className='fs '>Make Your Self</h3>
                <spna className='d-block  '>Commit to yourself every single day with @Ritual</spna>
            </div>
            <div style={{flexFlow:'rowrap'}} className='d-flex grism flex-wrap justify-content-between mt-3 '>
                <img style={{maxHeight:270+'px'}} className='img-fluid medIm  rounded' src={img} alt="" srcset="" />
                <img style={{maxHeight:270+'px'}} className='img-fluid medIm rounded' src={img2} alt="" srcset="" />
                <img style={{maxHeight:270+'px'}} className='img-fluid medIm rounded' src={img3} alt="" srcset="" />
                <img style={{maxHeight:270+'px'}} className='img-fluid medIm  rounded' src={img4} alt="" srcset="" />
            </div>
        </>
    )
}

export default FourImG
