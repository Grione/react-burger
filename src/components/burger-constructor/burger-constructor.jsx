import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorList from './constructor-list';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { postOrder } from '../../utils/burger-api';
import ConstructorStyles from './burger-constructor.module.css';

function BurgerConstructor() {
  const [orderData, setOrderData] = useState();
  const [openedModal, setOpenedModal] = useState(false);
  const ingredientsData = useSelector(state => state.constructorIngredients.constructorIngredients);

  const bun = useMemo(() => ingredientsData.find((el) => el.type === 'bun'), [ingredientsData]);
  const ingredients = useMemo(() => ingredientsData.filter((el) => el.type !== 'bun'), [ingredientsData]);

  function getTotalPrice(ingredients) {
    return ingredients.reduce(
      (acc, current) => { return acc + current.price }, 0) + bun.price * 2
  }
  /*   const totalPrice = useMemo(() => ingredients.reduce(
      (acc, current) => { return acc + current.price }, 0) + bun.price * 2,
      [bun, ingredients]) */

  //const ingredientsIds = useMemo(() => [...ingredients.map((el) => el._id), bun._id], [ingredients, bun]);

  function sendOrder(ingredients) {
    if (!ingredients.length) return;
    const ids = [...ingredients.map((el) => el._id), bun._id];
    postOrder(ids).then((data) => {
      setOrderData(data.order.number);
      setOpenedModal(true);
    })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className={ConstructorStyles.constructor}>
        <ConstructorList />
        <div className={`pt-10 ${ConstructorStyles['constructor-footer']}`}>
          <div className={ConstructorStyles.total}>
            <span className='text text_type_digits-medium'>{
              ingredients.length ? getTotalPrice(ingredients) : ''
            }</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large"
            onClick={() => { sendOrder(ingredients) }}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {openedModal &&
        <Modal close={() => setOpenedModal(false)}>
          <OrderDetails id={orderData} />
        </Modal>}
    </>

  )
}

export default BurgerConstructor;

