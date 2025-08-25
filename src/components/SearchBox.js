import React, { useState } from 'react';
import uuid4 from "uuid4";

const SearchBox = ({ onFoodSearch }) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [searchInput, setSearchInput] = useState('');

    const searchFood = async (food) => {
        try {
            const response = await fetch(
                `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(food)}`,
                { headers: { "X-Api-Key": api_key } }
            );

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();

            if (data.items.length > 0) {
                const item = data.items[0];
                return {
                    id: uuid4(),
                    food: item.name,
                    calories: item.calories,
                    carbs: item.carbohydrates_total_g,
                    proteins: item.protein_g,
                    fats: item.fat_total_g,
                    serving: item.serving_size_g
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Error fetching food: ${error}`);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchInput) return;
        const foodData = await searchFood(searchInput);
        onFoodSearch(foodData);
    };

    return (
        <form className="d-flex gap-2" onSubmit={handleSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="Search for any food..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
};

export default SearchBox;