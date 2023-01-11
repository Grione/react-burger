import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import BurgerIngredientsCard from "../burger-ingredients-card/burger-ingredients-card";
import BurgerListStyles from './burger-list.module.css';

function BurgerIngredientsList(props) {
  const { title, ingredients, openModal } = props;

  return (
    <div className='pb-10'>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={`${BurgerListStyles.list} pt-6 pl-4 pr-4`}>
        {
          ingredients.map((el) => {
            return (
              <BurgerIngredientsCard card={el} key={el._id} openModal={openModal} />
            )
          })
        }

      </ul>
    </div>
  )
}

BurgerIngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
}

export default BurgerIngredientsList;