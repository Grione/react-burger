import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import ingredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('buns')

  const { data } = props;

  const buns = useMemo(()=>data.filter((el) => el.type === 'bun'), [data]);
  const mains = useMemo(()=>data.filter((el) => el.type === 'main'), [data]);
  const sauces = useMemo(()=>data.filter((el) => el.type === 'sauce'), [data]);


  return (
    <div className={ingredientsStyles.ingredients}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <ul className={`${ingredientsStyles.tabs} pt-5 pb-10`}>
        <li>
          <Tab
            value="buns"
            active={current === 'buns'}
            onClick={setCurrent}>Булки</Tab>
        </li>
        <li>
          <Tab
            value="sauces"
            active={current === 'sauces'}
            onClick={setCurrent}>Соусы</Tab>
        </li>
        <li>
          <Tab
            value="mains"
            active={current === 'mains'}
            onClick={setCurrent}>Начинки</Tab>
        </li>
      </ul>
      <div className={ingredientsStyles['list-wrapper']}>
        <BurgerIngredientsList ingredients={buns} title="Булки" />
        <BurgerIngredientsList ingredients={sauces} title="Соусы" />
        <BurgerIngredientsList ingredients={mains} title="Начинки" />
      </div>

    </div>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients; 