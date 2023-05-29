import { useMemo, FC } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { useNavigate } from 'react-router-dom';
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR, CLOSE_ORDER_MODAL } from '../../services/action-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorList from './constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { postOrder } from '../../utils/burger-api';
import { TIngredient } from '../../types';
import ConstructorStyles from './burger-constructor.module.css';

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isModal = useSelector((store) => store.order.isModal);

  const ingredients = useSelector((state) => state.ingredients.constructorIngredients);

  const { isAuthenticated } = useSelector((state) => state.user);

  const bun = useSelector((state) => state.ingredients.constructorBun[0]);

  const totalPrice = useMemo(() => {
    if (ingredients.length > 0 || bun) {
      return ingredients.reduce(
        (acc: number, current: TIngredient) => { return acc + current.price }, 0) + (bun ? bun.price * 2 : 0)
    }
  }, [ingredients, bun]);

  function sendOrder(ingredients:any) {
    if (ingredients.length === 0) {
      return;
    }
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    const ids = [...ingredients.map((el: TIngredient) => el._id), bun._id];

    dispatch({ type: GET_ORDER_REQUEST });

    postOrder(ids).then((data: any) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: data.order.number })
    })
      .catch((error) => {
        dispatch({ type: GET_ORDER_ERROR })
        console.log(error);
      })
  }

  return (
    <>
      <div className={ConstructorStyles['constructor']}>
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
        <Modal close={() => dispatch({ type: CLOSE_ORDER_MODAL })}>
          <OrderDetails />
        </Modal>}
    </>

  )
}

export default BurgerConstructor;

