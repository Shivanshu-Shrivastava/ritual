import React from 'react'

function Navbar() {
    return (
        <nav className="bs sticky-top bg-white">
            <div className='d-flex justify-content-between'>
           <spna className='material-icons hoB m-auto'>menu</spna>
            <a className='m-auto' href='#'>Ritual</a>

            <div className='d-flex mx-auto justify-content-between'>
                <a style={{borderBottom:'unset',padding:'unset'}} className='pr-3 my-auto  linkB' href='#'>Who we are</a>
           <spna className='material-icons hoB pl-3 my-auto'>shop</spna>

                </div>
           </div>
           
        </nav>
    )
}

export default Navbar
