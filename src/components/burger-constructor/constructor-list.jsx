import { useDispatch, useSelector } from 'react-redux';
import ConstructorCard from './constructor-card';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BlankIngredient from './blank-ingredient';
import ConstructorListStyles from './constructor-list.module.css';
import { useDrop } from 'react-dnd/dist/hooks';
import { ADD_INGREDIENT, ADD_BUN } from '../../services/action-types';

function ConstructorList() {
  const bun = useSelector(state => state.ingredients.constructorBun[0])
  const ingredients = useSelector(state => state.ingredients.constructorIngredients)

  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if (item.type === 'bun') {
        dispatch({ type: ADD_BUN, payload: item.id });
      } else {
        dispatch({ type: ADD_INGREDIENT, payload: item.id });
      }
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
              ingredients.map((item, index) => {
                return (
                  <ConstructorCard index={index} item={item} key={item.key}/>
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