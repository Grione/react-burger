import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';


function BurgerIngredientsCard(props) {
  const card = props.card;
  return (
    <li className={BurgerIngredientsCardStyles.card}>
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
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  }),
}

export default BurgerIngredientsCard; 