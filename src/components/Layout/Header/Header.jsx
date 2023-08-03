import React from 'react';

import meal from '../../../assets/meal.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}> 
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={['main-image']}>
                <img src={meal} alt='A Table full of delicious food'/>
            </div>
        </>
    )
}

export default Header