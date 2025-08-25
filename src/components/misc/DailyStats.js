import React from 'react'

const DailyStats = (props) => {
    return (
        <div className='d-flex flex-column gap-3 my-5'>
            <h2 className='text-center'>Today you have eaten...</h2>
            <div className='d-flex align-self-center justify-self-center align-items-start justify-content-center gap-5 text-center'>
                <div>
                    <p className='fw-semibold text-primary mb-0'>{props.data.calories}</p>
                    <p>calories</p>
                </div>
                <div>
                    <p className='fw-semibold text-primary mb-0'>{props.data.carbs}g</p>
                    <p>carbs</p>
                </div>
                <div>
                    <p className='fw-semibold text-primary mb-0'>{props.data.proteins}g</p>
                    <p>protein</p>
                </div>
                <div>
                    <p className='fw-semibold text-primary mb-0'>{props.data.fats}g</p>
                    <p>fats</p>
                </div>
            </div>
        </div>
    )
}

export default DailyStats