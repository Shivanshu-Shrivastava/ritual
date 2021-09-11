import React from 'react'

function Footer3() {
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' >
                <div className='d-flex'>
                    <span className='material-icons'>local_fire_department</span>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <span className='mx-auto'>Privacy Policy</span>
                        <span className='mx-auto'>Terms Of Service</span>
                        <span className='mx-auto'>Accessibility</span>
                        <span className='mx-auto'>Do Not Track</span>
                        <span className='mx-auto'>© 2021 Ritual. All rights reserved.</span>
                    </div>
                </div>
            </div>
            <div className='col-md-6 mt-sm-4 mt-md-0 d-flex flex-column col-sm-12' >
                <div>
                    * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease

                </div>
                <div>

                The FDA plays a specific role in regulating the nutraceutical industry.<a href='#' className='linkB' >Learn More</a>.
                </div>
            </div>
        </div>
    )
}

export default Footer3
