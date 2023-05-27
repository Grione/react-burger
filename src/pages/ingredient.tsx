import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../services/hooks';
import ingredientDetailsStyles from '../components/ingredient-details/ingredient-details.module.css';
import { TIngredient } from '../types';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '120px'
}

export const IngredientPage: FC = () => {
  const { id } = useParams();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredient = ingredients.find((el:TIngredient) => el._id === id);

  if (!ingredient) return null;
  return (
    <>
      <div style={styles}>
        <div className={ingredientDetailsStyles.wrapper}>
          <h2 className='text text_type_main-large'>Детали ингредиента</h2>
          <div className={ingredientDetailsStyles.image}>
            <img src={ingredient.image_large} alt="" />
          </div>
          <h4 className={`text text_type_main-medium title mt-4`}>{ingredient.name}</h4>
          <ul className={`mt-8 ${ingredientDetailsStyles.list}`}>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
              <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Белки, г</span>
              <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
              <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
              <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
