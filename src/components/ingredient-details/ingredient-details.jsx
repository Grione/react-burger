import ingredientDetailsStyles from './ingredient-details.module.css';
import { ingredientPropTypes } from '../../utils/propTypes';

function IngredientDetails(props) {
  const { name, image_large } = props.data;

  return (
    <div className={ingredientDetailsStyles.wrapper}>
      <div className={ingredientDetailsStyles.image}>
        <img src={image_large} alt="" />
      </div>
      <h4 className={`text text_type_main-medium title mt-4`}>{name}</h4>
      <ul className={`mt-8 ${ingredientDetailsStyles.list}`}>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{props.data.calories}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{props.data.proteins}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{props.data.fat}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{props.data.carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  data: ingredientPropTypes.isRequired,
}


export default IngredientDetails; 