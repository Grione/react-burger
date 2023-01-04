import ConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  return (
    <div className={ConstructorStyles.constructor}>
      <div className={`${ConstructorStyles['constructor-main']}`}>
        <div className="mb-4 pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
          />
        </div>
        <ul className={ConstructorStyles['constructor-list']}>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
          <li className={ConstructorStyles['constructor-element-wrapper']}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
            />
          </li>
        </ul>
        <div className="mt-4 pr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail='https://code.s3.yandex.net/react/code/meat-01.png'
          />
        </div>
      </div>
      <div className={`pt-10 ${ConstructorStyles['constructor-footer']}`}>
        <div className={ConstructorStyles.total}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;

