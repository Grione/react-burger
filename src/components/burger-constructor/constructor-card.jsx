import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { REMOVE_INGREDIENT } from '../../services/action-types';
import { useDispatch } from 'react-redux';
import ConstructorElementStyles from './constructor-card.module.css'

function ConstructorCard({ item, index }) {

  const dispatch = useDispatch();

  return (
    <li index={index} className={ConstructorElementStyles.element}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => dispatch({ type: REMOVE_INGREDIENT, payload: item.key })}
      />
    </li>
  )
}

export default ConstructorCard;
