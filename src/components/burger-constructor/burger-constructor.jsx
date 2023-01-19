import ConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo, useState, useContext } from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { IngredientsContext } from '../../services/ingredientsContext';
import { postOrder } from '../../utils/burger-api';

function BurgerConstructor() {
  const [orderData, setOrderData] = useState();
  const [openedModal, setOpenedModal] = useState(false);
  const ingredientsData = useContext(IngredientsContext)

  const bun = useMemo(() => ingredientsData.find((el) => el.type === 'bun'), [ingredientsData]);
  const ingredients = useMemo(() => ingredientsData.filter((el) => el.type !== 'bun'), [ingredientsData]);

  const totalPrice = useMemo(() => ingredients.reduce((acc, current) => { return acc + current.price }, 0) + bun.price * 2, [bun, ingredients])

  const ingredientsIds = useMemo(() => {
    const a = ingredients.map((el) => el._id);
    a.push(bun._id);
    return a;
  }, [ingredients, bun]);

  function sendOrder(ids) {
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
        <div className={`${ConstructorStyles['constructor-main']}`}>
          <div className={`mb-4 pr-4 ${ConstructorStyles['element-top']}`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
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
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        </div>
        <div className={`pt-10 ${ConstructorStyles['constructor-footer']}`}>
          <div className={ConstructorStyles.total}>
            <span className='text text_type_digits-medium'>{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large" onClick={() => { sendOrder(ingredientsIds) }}>
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

