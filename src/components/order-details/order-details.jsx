import PropTypes from 'prop-types';
import orderDetailsStyles from './order-details.module.css';
import doneIcon from '../../images/done.svg';

function OrderDetails(props) {
  const id = props.id;
  
  return (
    <div className={orderDetailsStyles.wrapper}>
      <div className={`text text_type_digits-large ${orderDetailsStyles.id}`}>{id}</div>
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

OrderDetails.propTypes = {
  id: PropTypes.number.isRequired,
}

export default OrderDetails; 