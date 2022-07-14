import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <img src={image} alt="please wait as the image loads" />
            <ol>
                <strong>Ingredients</strong>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
            <p className={style.left}><strong>Calories</strong><br /> {calories}</p>
        </div>
    )
}

export default Recipe;