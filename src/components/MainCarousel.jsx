import React from 'react'
import img from './../Img/Erica.jpg'
import img2 from './../Img/Sheri.jpg'
import img3 from './../Img/Caroline.jpg'
import img4 from './../Img/Brittany.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function MainCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <>
        <div className='text-center'>
                <h3 className='fs '>Skeptics Speak</h3>
                <spna className='d-block  '>With millions of Rituals delivered, discover why customers trust us with their daily health.

</spna>
            </div>
        <div  className='row '>
            <div className='col-md-4 col-sm-12'>

            </div>
            <div className='col'>
                <Slider {...settings}>
                    <div><img src={img} alt="" srcset="" /></div>
                    <div><img src={img2} alt="" srcset="" /></div>
                    <div><img src={img3} alt="" srcset="" /></div>
                    <div><img src={img4} alt="" srcset="" /></div>
                    <div><img src={img} alt="" srcset="" /></div>
                </Slider>
            </div>
            
        </div>
        </>
    )
}

export default MainCarousel
