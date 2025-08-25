import React from 'react'

const Header = (props) => {
    return (
        <>
            <h1 className='text-center mt-5 mb-3 fw-semibold'>{props.heading}</h1>
            <p className='text-center text-primary mb-5 fw-light'>{props.subheading}</p>
        </>
    )
}

export default Header