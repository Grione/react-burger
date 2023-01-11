import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import ConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { orderData } from '../../utils/order-data';
function BurgerConstructor(props) {
  const bun = props.data.find((el) => el.type === 'bun');
  const ingredients = props.data.filter((el) => el.type !== 'bun');

  return (
    <div className={ConstructorStyles.constructor}>
      <div className={`${ConstructorStyles['constructor-main']}`}>
        <div className={`mb-4 pr-4 ${ConstructorStyles['element-top']}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={ConstructorStyles['constructor-list']}>
          {
            ingredients.map((el) => {
              return (
                <li key={el._id} className={ConstructorStyles['constructor-element-wrapper']}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image}
                  />
                </li>
              )
            })
          }
        </ul>
        <div className={`mt-4 pr-4 ${ConstructorStyles['element-bottom']}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={`pt-10 ${ConstructorStyles['constructor-footer']}`}>
        <div className={ConstructorStyles.total}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => { props.openModal('order', orderData) }}>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
}

export default BurgerConstructor;

