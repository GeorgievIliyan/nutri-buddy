import React, { useState } from 'react';
import SearchBox from './SearchBox';
import FoodDetails from './FoodDetails';

const InfoWrapper = () => {
    const [foodData, setFoodData] = useState(null);

    return (
        <div>
            <SearchBox onFoodSearch={setFoodData} />
            {foodData && <FoodDetails data={foodData} />}
        </div>
    );
};

export default InfoWrapper;