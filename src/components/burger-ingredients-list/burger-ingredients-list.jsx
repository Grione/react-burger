import BurgerIngredientsCard from "../burger-ingredients-card/burger-ingredients-card";
import BurgerListStyles from './burger-list.module.css';

function BurgerIngredientsList(props) {
  return (
    <div className='pb-10'>
      <h2 className='text text_type_main-medium'>{props.title}</h2>
      <ul className={`${BurgerListStyles.list} pt-6 pl-4 pr-4`}>
        {
          props.ingredients.map((el) => {
            return (
              <BurgerIngredientsCard card={el} key={el._id} />
            )
          })
        }

      </ul>
    </div>
  )
}

export default BurgerIngredientsList;