import React from 'react';

const FoodDetails = ({ data, returnSelectedFoodItem }) => {

    const handleClick = () => {
        returnSelectedFoodItem(data);
    };

    return (
        <div className='my-5' id={data.id}>

            <h3 className='mb-3'>Nutrition values for <span className='text-primary'>{data.food}</span></h3>
            <p>Nutrients per <span className='text-primary'>{data.serving}g</span> serving</p>
            <p>Calories: <span className='text-primary'>{data.calories}kcal</span></p>
            <p>Proteins: <span className='text-primary'>{data.proteins}g</span></p>
            <p>Carbs: <span className='text-primary'>{data.carbs}g</span></p>
            <p>Fats: <span className='text-primary'>{data.fats}g</span></p>

            <button className='btn btn-success' onClick={handleClick} id={data.id}>Add</button>
        </div>
    );
};

export default FoodDetails;