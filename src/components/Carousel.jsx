import React from 'react'
import ImgCarouel from './ImgCarouel'
import img from './../Img/Category-Multivitamin.jpg'
import img2 from './../Img/Category-Protein__1_.jpg'
import img3 from './../Img/Category-Pregnancy__1_.jpg'
import img4 from './../Img/Category-Bundles.jpg'



function Carousel() {
    return (
        <div style={{overflowX:'scroll'}} className='d-flex hidesc justify-content-between'>
           <ImgCarouel img={img}  text='Shop Multivitamins'/> 
           <ImgCarouel img={img2} text='Shop Protein'/> 
           <ImgCarouel img={img3} text='Shop Pregancy'/> 
           <ImgCarouel img={img4} text='Shop Bundles'/> 
        </div>
    )
}

export default Carousel
