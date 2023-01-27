import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BlankIngredient from './blank-ingredient';
import ConstructorListStyles from './constructor-list.module.css';

function ConstructorList() {
  const data = useSelector(state => state.constructorIngredients.constructorIngredients);
  const bun = useMemo(() => data.find((el) => el.type === 'bun'), [data]);
  const ingredients = useMemo(() => data.filter((el) => el.type !== 'bun'), [data]);

  return (
    <>
      <div className={`${ConstructorListStyles['constructor-main']}`}>

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
        {ingredients.lenth ? (
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