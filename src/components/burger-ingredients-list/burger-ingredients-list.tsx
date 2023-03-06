import React from 'react';
import BurgerIngredientsCard from "../burger-ingredients-card/burger-ingredients-card";
import BurgerListStyles from './burger-list.module.css';
import { TIngredients } from '../../types';

type TIngredientsGroup = {
  title: string;
  ingredients: TIngredients;
  titleId: string;
}

type TRef = HTMLDivElement;

const BurgerIngredientsList = React.forwardRef<TRef, TIngredientsGroup>((props, ref) => {
  const { title, ingredients, titleId } = props;

  return (
    <div ref={ref} className='pb-10'>
      <h2 className='text text_type_main-medium' id={titleId}>{title}</h2>
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

export default BurgerIngredientsList;