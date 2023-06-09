import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {

    const [cartIsShown, setCartIsShown] = useState(false);


    const showCart = () => {
        setCartIsShown(true)
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>

            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCart} />
            <Meals />
        </CartProvider>
    )
};

export default App;