import { ingredientPropTypes } from '../../utils/propTypes';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';
import PropTypes from 'prop-types';

function BurgerIngredientsCard(props) {
  const { card, openModal } = props;
  return (
    <li className={BurgerIngredientsCardStyles.card} onClick={() => { openModal('ingredient', card) }}>
      <span className={`${BurgerIngredientsCardStyles.counter} text text_type_digits-default`}>2</span>
      <div className='pl-4 pr-4'>
        <img src={card.image} alt="" />
      </div>
      <span className={`${BurgerIngredientsCardStyles.price} mt-1 text text_type_digits-default`}>{card.price} <CurrencyIcon /></span>
      <h3 className={`mt-1 text text_type_main-default ${BurgerIngredientsCardStyles.name}`}>{card.name}</h3>
    </li >
  )
}

BurgerIngredientsCard.propTypes = {
  card: ingredientPropTypes.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default BurgerIngredientsCard; 