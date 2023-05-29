import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { REMOVE_INGREDIENT, REORDER_INGREDIENTS } from '../../services/action-types';
import { useDispatch } from '../../services/hooks';
import { FC, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import ConstructorElementStyles from './constructor-card.module.css';
import { TConstructorIngredient } from '../../types';

const ConstructorCard: FC<TConstructorIngredient> = ({ item, index }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ['ingredient-constructor'],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      // Индекс перемещаемого элемента
      const dragIndex = item.index;
      // Индекс текущего элемента (над которым находится курсор при dnd)
      const hoverIndex = index;

      // Выходим, если индексы сопадают
      if (dragIndex === hoverIndex) {
        return;
      }

      // Получаем положение текущего элемента относительно экрана
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Получаем центр текущего элемента по вертикали
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Получаем положение курсора
      const clientOffset = monitor.getClientOffset();
      // Получаем положение курсора относительно текущего элемента
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      // Выходим, если перемещаемый элемент ниже, чем 50% от высоты текущего
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Выходим, если перемещаемый элемент выше, чем 50% от высоты текущего
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({ type: REORDER_INGREDIENTS, payload: { from: dragIndex, to: hoverIndex } });

      // Сразу меняем индекс перемещаемого элемента
      item.index = hoverIndex;
    }
  });
  const [, drag] = useDrag({
    type: 'ingredient-constructor',
    item: () => {
      // Определяем элемент
      return { index };
    },
  });


  drag(drop(ref));


  return (
    <li ref={ref} data-handler-id={handlerId} className={ConstructorElementStyles.element}>
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
