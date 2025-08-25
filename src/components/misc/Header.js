import React from 'react'

const Header = (props) => {
    return (
        <>
            <h1 className='text-center mt-5 mb-3'>{props.heading}</h1>
            <p className='text-center mb-5 fw-light'>{props.subheading}</p>
        </>
    )
}

export default Header