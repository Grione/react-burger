import ingredientDetailsStyles from '../components/ingredient-details/ingredient-details.module.css';
import { ingredientPropTypes } from '../utils/propTypes';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '120px'
}

export function IngredientPage() {

  return (
    <>
      <div style={styles}>
        <div className={ingredientDetailsStyles.wrapper}>
          <h2 className='text text_type_main-large'>Детали ингредиента</h2>
          <div className={ingredientDetailsStyles.image}>
            <img src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
          </div>
          <h4 className={`text text_type_main-medium title mt-4`}>Биокотлета из марсианской Магнолии</h4>
          <ul className={`mt-8 ${ingredientDetailsStyles.list}`}>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
              <span className="text text_type_digits-default text_color_inactive">225</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Белки, г</span>
              <span className="text text_type_digits-default text_color_inactive">100</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
              <span className="text text_type_digits-default text_color_inactive">23</span>
            </li>
            <li className={ingredientDetailsStyles.item}>
              <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
              <span className="text text_type_digits-default text_color_inactive">30</span>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}

/* IngredientPage.propTypes = {
  data: ingredientPropTypes.isRequired,
} */