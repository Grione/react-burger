import { ingredientPropTypes } from '../../utils/propTypes';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useState } from 'react';
function BurgerIngredientsCard(props) {
  const [openedModal, setOpenedModal] = useState(false);
  const { card } = props;

  function closeModal() {
    setOpenedModal(false);
  }
  return (
    <>
      <li className={BurgerIngredientsCardStyles.card} onClick={() => { setOpenedModal(true) }}>
        <span className={`${BurgerIngredientsCardStyles.counter} text text_type_digits-default`}>2</span>
        <div className='pl-4 pr-4'>
          <img src={card.image} alt="" />
        </div>
        <span className={`${BurgerIngredientsCardStyles.price} mt-1 text text_type_digits-default`}>{card.price} <CurrencyIcon /></span>
        <h3 className={`mt-1 text text_type_main-default ${BurgerIngredientsCardStyles.name}`}>{card.name}</h3>
      </li>
      {openedModal &&
        <Modal title="Детали ингредиента" close={closeModal}>
          <IngredientDetails data={card} />
        </Modal>
      }
    </>

  )
}

BurgerIngredientsCard.propTypes = {
  card: ingredientPropTypes.isRequired,
}

export default BurgerIngredientsCard; 