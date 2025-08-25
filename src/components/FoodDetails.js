import React from 'react'

const FoodDetails = (props) => {
    return (
        <div>
            <h6>{props.data.food}</h6>
            <p>Calories: {props.data.calories}g</p>
            <p>Proteins: {props.data.proteins}g</p>
            <p>Carbs: {props.data.carbs}g</p>
            <p>Fats: {props.data.fats}g</p>
        </div>
    )
}

export default FoodDetails