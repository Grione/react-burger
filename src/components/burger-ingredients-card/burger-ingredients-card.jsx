import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../../services/action-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDrag } from "react-dnd";

function BurgerIngredientsCard(props) {
  const { card } = props;

  const isModal = useSelector(state => state.currentIngredient.isModal);
  const currentIngredient = useSelector(state => state.currentIngredient.currentIngredient);

  const constructorIngredientCount = useSelector(state => state.ingredients.constructorIngredients.filter((item) => item._id === card._id).length);
  const bunCount = useSelector(state => state.ingredients.constructorBun.filter((item) => item._id === card._id).length);
  const count = card.type === 'bun'? bunCount :constructorIngredientCount;

  const dispatch = useDispatch();

  const id = card._id;
  const type = card.type;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id, type },
  });

  function openModal() {
    dispatch({ type: OPEN_INGREDIENT, payload: card })
  }

  function closeModal() {
    dispatch({ type: CLOSE_INGREDIENT })
  }
  return (
    <>
      <li className={BurgerIngredientsCardStyles.card} ref={dragRef} onClick={() => { openModal() }}>
        <div className={`${BurgerIngredientsCardStyles.counter} text text_type_digits-default`}>
          <Counter count={count} size={count < 99 ? 'default' : 'small'} extraClass="m-1" />
        </div>

        <div className='pl-4 pr-4'>
          <img src={card.image} alt="" />
        </div>
        <span className={`${BurgerIngredientsCardStyles.price} mt-1 text text_type_digits-default`}>{card.price} <CurrencyIcon /></span>
        <h3 className={`mt-1 text text_type_main-default ${BurgerIngredientsCardStyles.name}`}>{card.name}</h3>
      </li>
      {isModal && currentIngredient === card &&
        <Modal title="Детали ингредиента" close={closeModal}>
          <IngredientDetails data={currentIngredient} />
        </Modal>
      }
    </>

  )
}

BurgerIngredientsCard.propTypes = {
  card: ingredientPropTypes.isRequired,
}

export default BurgerIngredientsCard; 