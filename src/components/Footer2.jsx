import React from 'react'

function Footer2() {
    function istdown() {
        const x = document.getElementById('istid')

        if (x.classList.contains('d-none')) {
            x.classList.remove('d-none')
        } else {
            x.classList.add('d-none')

        }

    }
    return (
        <div style={{overflow:'hidden'}} className='row'>
            <div className='col-md-3 col-sm-12'>
                <h2 className='fs'>Ritual</h2>
            </div>
            <div className='col-md-3 d-flex flex-column col-sm-12'>
                <div id='istclick' className='row py-md-0 py-4'>

                    <span className='ft col-6'>SHOP</span>
                    <span id='chatext' className='material-icons col-6 text-end ft '>expand_less</span>

                </div>
                <div id='istid' className=''>
                    <span style={{cursor:'pointer'}} className='fs my-md-3 mb-sm-3'>Multivitamins</span>
                    <span style={{cursor:'pointer'}} className='fs my-3'>Protein</span>
                    <span style={{cursor:'pointer'}} className='fs my-3'>Bundles</span>
                    <span style={{cursor:'pointer'}} className='fs my-3'>Gift Cards</span>
                </div>
            </div>
            <div className='col-md-3 d-flex flex-column col-sm-12'>
                <div id='iindclick' className='row py-md-0 py-4'>

                    <span className='ft col-6'>ABOUT</span>
                    <span id='iindchatext' className='material-icons col-6 text-end ft '>expand_less</span>

                </div>
                <div id='iindid' className=''>
                    <span style={{cursor:'pointer'}}  className='fs my-md-3 mb-sm-3'>Ingrediants</span>
                    <span style={{cursor:'pointer'}}  className='fs my-3'>Who We Are</span>
                    <span style={{cursor:'pointer'}}  className='fs my-3'>Our Clinical Study</span>
                    <span  style={{cursor:'pointer'}} className='fs my-3'>The Journal</span>
                    <span style={{cursor:'pointer'}}  className='fs my-3'>Reviews</span>
                </div>
            </div>
            <div className='col-md-3 d-flex flex-column col-sm-12'>
                <div id='iiirdclick' className='row py-md-0 py-4'>

                    <span className='ft col-6'>MORE</span>
                    <span id='iiirdchatext' className='material-icons col-6 text-end ft '>expand_less</span>

                </div>
                <div id='iiirdid' className=''>
                <span style={{cursor:'pointer'}} className='fs my-md-3 mb-sm-3'>Careers</span>
                <span style={{cursor:'pointer'}} className='fs my-3'>Press</span>
                <span style={{cursor:'pointer'}} className='fs my-3'>Help</span>
                </div>
            </div>
        </div>
    )
}

export default Footer2
