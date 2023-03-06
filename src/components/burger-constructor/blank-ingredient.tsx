import { FC } from 'react';
import BlankIngredientStyles from './blank-ingredient.module.css';

type TProps = {
  type?: string
}

const BlankIngredient: FC<TProps> = ({ type }) => {
  const typeProp = type ? type : '';

  return (
    <>
      <div className={`${BlankIngredientStyles.element} ${BlankIngredientStyles[typeProp]}`}>
        <span>Выберите ингредиенты</span>
      </div>
    </>
  )
}

export default BlankIngredient;

