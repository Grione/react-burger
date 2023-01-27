import { useDispatch, useSelector } from 'react-redux';
import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../../services/action-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function BurgerIngredientsCard(props) {
  const { card } = props;

  const isModal = useSelector(state => state.currentIngredient.isModal);
  const currentIngredient = useSelector(state => state.currentIngredient.currentIngredient);
  const dispatch = useDispatch();

  function openModal() {
    dispatch({type: OPEN_INGREDIENT, payload: card})
  }

  function closeModal() {
    dispatch({type: CLOSE_INGREDIENT})
  }
  return (
    <>
      <li className={BurgerIngredientsCardStyles.card} onClick={() => { openModal() }}>
        <span className={`${BurgerIngredientsCardStyles.counter} text text_type_digits-default`}>2</span>
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