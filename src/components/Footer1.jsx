import React from 'react'

function Footer1() {
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
                <h3 className='fs '>Subscribe for updates, exclusive promotions, and more.</h3>
            </div>
            <div className='col-md-6 col-sm-12 d-flex flex-column'>
                <form className=''>
                <input className='inpu' type="email"  placeholder="Enter your email"   />
                <span className='linkB'>Subscribe</span>
                </form>
                <div className='d-flex mt-4'>
                        <span style={{fontSize:33+'px',cursor:'pointer'}} className='material-icons '>wordpress</span>
                        <span style={{fontSize:33+'px',cursor:'pointer'}} className='material-icons ml-4'>shopify</span>
                        <span style={{fontSize:33+'px',cursor:'pointer'}} className='material-icons ml-4'>snapchat</span>
                        <span style={{fontSize:33+'px',cursor:'pointer'}} className='material-icons ml-4'>tiktok</span>
                        <span style={{fontSize:33+'px',cursor:'pointer'}} className='material-icons ml-4'>reddit</span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer1
