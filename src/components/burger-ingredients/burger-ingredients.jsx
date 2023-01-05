import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import ingredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients(props) {
  const bun = props.data.filter((el) => el.type === 'bun');
  const main = props.data.filter((el) => el.type === 'main');
  const sauce = props.data.filter((el) => el.type === 'sauce');
  return (
    <div className={ingredientsStyles.ingredients}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <ul className={`${ingredientsStyles.tabs} pt-5 pb-10`}>
        <li><Tab>Булки</Tab></li>
        <li><Tab>Соусы</Tab></li>
        <li><Tab>Начинки</Tab></li>
      </ul>
      <div className={ingredientsStyles['list-wrapper']}>
        <BurgerIngredientsList ingredients={bun} title="Булки" />
        <BurgerIngredientsList ingredients={sauce} title="Соусы" />
        <BurgerIngredientsList ingredients={main} title="Начинки" />
      </div>

    </div>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default BurgerIngredients; 