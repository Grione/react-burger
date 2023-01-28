import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BlankIngredient from './blank-ingredient';
import ConstructorListStyles from './constructor-list.module.css';
import { useDrop } from 'react-dnd/dist/hooks';
import { ADD_INGREDIENT } from '../../services/action-types';

function ConstructorList() {
  const data = useSelector(state => state.ingredients.constructorIngredients);
  const bun = useMemo(() => data.find((el) => el.type === 'bun'), [data]);
  const ingredients = useMemo(() => data.filter((el) => el.type !== 'bun'), [data]);

  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      dispatch({ type: ADD_INGREDIENT, payload: itemId.id });
    },
  });

  return (
    <>
      <div ref={dropTarget} className={`${ConstructorListStyles['constructor-main']}`}>

        <div className={`mb-4 ${ConstructorListStyles['element-top']}`}>
          {bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : <BlankIngredient type='top' />
          }
        </div>
        {ingredients.length ? (
          <ul className={ConstructorListStyles['constructor-list']}>
            {
              ingredients.map((el) => {
                return (
                  <li key={el._id} className={ConstructorListStyles['constructor-element-wrapper']}>
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
        ) : <BlankIngredient />}

        <div className={`mt-4 ${ConstructorListStyles['element-bottom']}`}>
          {bun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />)
            : <BlankIngredient type='bottom' />}
        </div>
      </div>

    </>

  )
}

export default ConstructorList; 