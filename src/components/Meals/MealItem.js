
import './MealItem.css';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Form from './Form';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    }


    return (
        <li className='mealItem'>
            <div>
                <h1>{props.name}</h1>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>

            <div>
                <Form id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;