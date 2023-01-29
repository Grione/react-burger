import BlankIngredientStyles from './blank-ingredient.module.css'

function BlankIngredient(props) {
  const type = props.type ? props.type : '';

  return (
    <div className={`${BlankIngredientStyles.element} ${BlankIngredientStyles[type]}`}>
      <span>Выберите ингредиенты</span>
    </div>
  )
}

export default BlankIngredient; 