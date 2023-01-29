import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import BurgerIngredientsCard from "../burger-ingredients-card/burger-ingredients-card";
import BurgerListStyles from './burger-list.module.css';


const BurgerIngredientsList = React.forwardRef((props, ref)=> {
  const { title, ingredients } = props;

  return (
    <div ref={ref} className='pb-10'>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={`${BurgerListStyles.list} pt-6 pl-4 pr-4`}>
        {
          ingredients.map((el) => {
            return (
              <BurgerIngredientsCard card={el} key={el._id} />
            )
          })
        }

      </ul>
    </div>
  )
})

BurgerIngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredientsList;