import React from 'react'

const DailyLog = ({meals, removeFunction}) => {

    const capitalizeFirstLetter = (str) => {
        if (str.length === 0) {
            return str;
        }
        const firstLetter = str.charAt(0).toUpperCase();
        const restOfStr = str.slice(1);
        return firstLetter + restOfStr;
};

    return (
        <div className='my-5'>
            <h2 className='text-success'>Food for today</h2>
            <div className='d-flex flex-column'>
                {meals.map((meal, index) => (
                    <div key={index} className='p-4 border rounded m-1'>
                        <h4 className='mb-3'>{capitalizeFirstLetter(meal.food)}</h4>
                        <p>Serving: <span className='text-primary'>{meal.serving}g</span></p>
                        <div className='d-flex flex-column '>
                            <p>Proteins: <span className='text-primary'>{meal.proteins}</span></p>
                            <p>Carbs: <span className='text-primary'>{meal.carbs}</span></p>
                            <p>Fats: <span className='text-primary'>{meal.fats}</span></p>
                        </div>
                        <button className='btn btn-danger' onClick={() => removeFunction(meal.id)}>Remove <i class="bi bi-trash3-fill"></i></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DailyLog