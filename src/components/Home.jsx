import React from 'react'
import './../css/Home.css'
import Navbar from './Navbar'
import Imgsec from './Imgsec'
import Carousel from './Carousel'
import LogoText from './LogoText'
import RowImg from './RowImg'
import img from './../Img/home-feat-dyson.jpg'
import img2 from './../Img/Home-Map.jpg'
import HoverImg from './HoverImg'
import Himg from './../Img/PDP_EFM_Bottle.jpg'
import Himg2 from './../Img/PDP-EP18-Bag.jpg'
import img3 from './../Img/Home-Feat-03.jpg'
import FourImG from './FourImG'
import Footer1 from'./Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import MainCarousel from './MainCarousel'

function Home() {
    return (
        <>
            <Navbar />
            <Imgsec />
            <div className='container p-md-4 p-3'>
                <Carousel />
                <section className='my-md-4 my-3 p-3 px-md-5'>
                    <LogoText />
                </section>
                <div>
                    <div className='circle'></div>
                    <RowImg ist='1' iind='2' src={img} text="" span='From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.' a1='Who We Are' />
                    <RowImg ist='2' iind='1' src={img2} text="You deserve traceability" span='We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.' a1='Meet Our Ingredients' a2='Our Clinical Study' />

                </div>
                <section data-aos='flip-up' style={{overflow:'hidden'}}>
                    <div className='row'>
                        <h1 className='col-6 fs'>Featured Product</h1>
                        <div className='col-6 text-right '>
                            <a className='linkB' href='#'>Shop all</a>
                        </div>
                    </div>
                    <div style={{overflowX:'scroll'}} className='d-flex justify-content-between hidesc'>
                        <HoverImg img={Himg} span1='Essential for Women'  h3='Multivitamin 18+' span2='The clinical-backed multivitamin, reimagined for women 18+.' />
                        <HoverImg img={Himg} span1='Essential for Women' h3='Prenatal Multivitamin' span2='The clinical-backed multivitamin, reimagined for women 18+.'/>
                        <HoverImg img={Himg2} span1='Essential Protein' h3='Daily Shake 18+' span3='The reimagined plant-based protein for adults 18-49'/>
                        <HoverImg img={Himg} span1='Essential for Men' h3='Multivitamin 18+' span4='Formulated for men 18-49 to help fill nutrient gaps in their diet.*'/>

                    </div>
                </section>
                <section className='mt-5'>
                <RowImg ist='1' iind='2' src={img3} text="Clean and simple, delivered" span='Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual.*' ico1='Free shipping' ico2='Control your delivery date' ico3='Free and easy cancellation' ico4='30-day money back guarantee'/>

                </section>
                <section style={{backgroundColor:'#f8f7f9'}} className='p-5'>
                    <MainCarousel />

                </section>
                <section data-aos='flip-down' style={{overflow:'hidden'}}>
                    <FourImG />
                </section>

            </div>
            <hr/>
            <div className='container p-md-4 p-3'>
                <Footer1 />
                <div style={{overflow:'hidden'}}>
                    <Footer2 />
                </div>
                <div>
                        <Footer3 />
                </div>
            </div>
        </>

    )
}

export default Home
