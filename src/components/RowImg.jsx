import React from 'react'

function RowImg(props) {
    return (
        <div style={{overflow:'hidden'}} className='row mb-5'>
            <div  id='ch1' data-aos="fade-right" className={'order-'+props.ist+' col-sm-12 col-md-6'}>
                <img className='img-fluid' src={props.src} alt="" srcset="" />
            </div>
            <div  id='ch2' data-aos="fade-left" className={'order-'+props.iind+' col-sm-12 p-55 d-flex flex-column col-md-6'}>
                {props.text?<h1 className='fs mb-4'>
                {props.text}
                </h1>:<h1 className='fs mb-4'>
                We're not <br/> about pseudoscience and half-truths
                </h1>}
                
                <span className='mb-4 spnaEmo'>
                    {props.span}
                </span>
                {props.a1?<div className='mb-4'>
                <a className='linkB'  href='#'>{props.a1}</a>
                </div>:null}
                
                {props.a2?<div className='mb-4'>
                <a className='linkB'  href='#'>{props.a2}</a>
                </div>:null}
                {props.ico1?
                <div className='d-flex flex-column'>
                    <div className='d-flex mb-4'>
                        <span className='material-icons mr-4'>where_to_vote</span>
                        <span>{props.ico1}</span>
                    </div>
                    <div className='d-flex mb-4'>
                        <span className='material-icons mr-4'>update</span>
                        <span>{props.ico2}</span>
                    </div>
                    <div className='d-flex mb-4'>
                        <span className='material-icons mr-4'>highlight_off</span>
                        <span>{props.ico3}</span>
                    </div>
                    <div className='d-flex mb-4'>
                        <span className='material-icons mr-4'>grade</span>
                        <span>{props.ico4}</span>
                    </div>
                    
                </div>:null}
            </div>
            
        </div>
    )
}

export default RowImg
