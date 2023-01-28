import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ORDER, CLOSE_MODAL } from '../../services/action-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorList from './constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { postOrder } from '../../utils/burger-api';
import ConstructorStyles from './burger-constructor.module.css';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.order.isModal);

  const ingredients = useSelector(state => state.ingredients.constructorIngredients);
  const bun = useSelector(state => state.ingredients.constructorBun);

  const totalPrice = useMemo(() => {
    if (ingredients.length || bun.price) {
      return ingredients.reduce(
        (acc, current) => { return acc + current.price }, 0) + (bun.price ? bun.price * 2 : 0)
    }
  }, [ingredients, bun]);


  function sendOrder(ingredients) {
    if (!ingredients.length) return;
    const ids = [...ingredients.map((el) => el._id), bun._id];
    postOrder(ids).then((data) => {
      dispatch({ type: GET_ORDER, payload: data.order.number })
    })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className={ConstructorStyles.constructor}>
        <ConstructorList />
        {totalPrice && <div className={`pt-10 ${ConstructorStyles['constructor-footer']}`}>
          <div className={ConstructorStyles.total}>
            <span className='text text_type_digits-medium'>
              {totalPrice}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large"
            onClick={() => { sendOrder(ingredients) }}>
            Оформить заказ
          </Button>
        </div>}

      </div>
      {isModal &&
        <Modal close={() => dispatch({ type: CLOSE_MODAL })}>
          <OrderDetails />
        </Modal>}
    </>

  )
}

export default BurgerConstructor;

