import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { TIngredient } from '../../types';
import ingredientDetailsStyles from './ingredient-details.module.css';

const IngredientDetails: FC = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const { id } = useParams();
  const ingredient = ingredients.find((el: TIngredient) => el._id === id);

  if (!ingredient) return null;

  return (
    <>
      <div className={ingredientDetailsStyles.wrapper}>
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
    </>
  )
}

export default IngredientDetails; 