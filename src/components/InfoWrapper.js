import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import FoodDetails from './FoodDetails';
import DailyLog from './DailyLog';

const InfoWrapper = () => {

    const getMealsFromLocalStorage = () => {
        try {
            const storedMeals = localStorage.getItem('dailyMeals');
            return storedMeals ? JSON.parse(storedMeals) : [];
        } catch (error) {
            console.error("Failed to parse meals from local storage:", error);
            return [];
        }
    };

    const [foodData, setFoodData] = useState(null);
    const [mealsToday, setMealsToday] = useState(getMealsFromLocalStorage());
    const [lastResetDay, setLastResetDay] = useState(new Date().getDate());

    const handleSelectedFoodItem = () => {
        if (foodData) {
            setMealsToday([...mealsToday, foodData]);
        }
    };

    // Meal Saving
    useEffect(() => {
        try {
            localStorage.setItem('dailyMeals', JSON.stringify(mealsToday));
        } catch (error) {
            console.error("Failed to save meals to local storage:", error);
        }
    }, [mealsToday]);

    // Daily Reset
    useEffect(() => {
        const currentDay = new Date().getDate();

        if (currentDay !== lastResetDay) {
            setMealsToday([]);
            setLastResetDay(currentDay);
            localStorage.setItem('dailyMeals', null)
            console.log("Meals reset for the new day!");
        }
    });

    // Remove function
    const removeFunction = (mealID) => {
        const meals = [...mealsToday].filter(meal => meal.id !== mealID)
        setMealsToday(meals)
    }

    return (
        <div>
            <SearchBox onFoodSearch={setFoodData} />
            {foodData && <FoodDetails data={foodData} returnSelectedFoodItem={handleSelectedFoodItem} />}
            <DailyLog meals={mealsToday} removeFunction={removeFunction}/>
        </div>
    );
};

export default InfoWrapper;