import './AvailableMeals.css';

import React from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card';



const MEALS = [
    {
        id: 'm1',
        name: 'Jalebi',
        description: 'sweet of indian',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Kaju katli',
        description: 'Cashews, ghee with cardamom and sugar',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Gulab jamun',
        description: ' 	Fried milk balls soaked in sweet syrup, such as rose syrup or honey',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const mealList = MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            id={meal.id}
        />
    ));
    return (
        <section className='meal'>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;