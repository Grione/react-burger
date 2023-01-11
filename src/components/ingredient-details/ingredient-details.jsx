import ingredientDetailsStyles from './ingredient-details.module.css';

function OrderDetails(props) {
  const { name, image_large } = props.data;
  const calories = props.data.calories;
  const carbohydrates = props.data.carbohydrates;
  const fat = props.data.fat;
  const proteins = props.data.proteins;

  return (
    <div className={ingredientDetailsStyles.wrapper}>
      <div className={ingredientDetailsStyles.image}>
        <img src={image_large} alt="" />
      </div>
      <h4 className={`text text_type_main-medium title mt-4`}>{name}</h4>
      <ul className={`mt-8 ${ingredientDetailsStyles.list}`}>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{calories}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Белки, г</span>
          <span className="text text_type_digits-default text_color_inactive">{proteins}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
          <span className="text text_type_digits-default text_color_inactive">{fat}</span>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
          <span className="text text_type_digits-default text_color_inactive">{carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}

export default OrderDetails; 