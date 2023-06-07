import orderDetailsStyles from './order-details.module.css';
import doneIcon from '../../images/done.svg';
import { useSelector } from '../../services/hooks';

function OrderDetails() {
  const id = useSelector((state) => state.order.order)

  return (
    <div className={orderDetailsStyles.wrapper}>
      <div className={`text text_type_digits-large ${orderDetailsStyles.id}`} data-test="order-id">{id}</div>
      <span className='mt-8 text text_type_main-medium'>идентификатор заказа</span>
      <div className={orderDetailsStyles.icon}>
        <img src={doneIcon} alt="" />
      </div>
      <div className={orderDetailsStyles.footer}>
        <span className='text text_type_main-small'>Ваш заказ начали готовить</span>
        <span className='text text_type_main-small text_color_inactive'>Дождитесь готовности на орбитальной станции</span>
      </div>
    </div>
  )
}

export default OrderDetails; 