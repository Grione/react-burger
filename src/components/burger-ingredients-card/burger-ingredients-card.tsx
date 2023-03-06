import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsCardStyles from './burger-ingredients-card.module.css';
import { useDrag } from "react-dnd";
import { TIngredient } from '../../types';

function BurgerIngredientsCard({ card }: { card: TIngredient }) {
  const constructorIngredientCount = useSelector((state: any) => state.ingredients.constructorIngredients.filter((item:TIngredient) => item._id === card._id).length);
  const bunCount = useSelector((state: any) => state.ingredients.constructorBun.filter((item: TIngredient) => item._id === card._id).length);
  const count = card.type === 'bun' ? bunCount : constructorIngredientCount;

  const location = useLocation();

  const id = card._id;
  const type = card.type;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id, type },
  });

  return (
    <>
      <li className={BurgerIngredientsCardStyles.card} ref={dragRef} >
        <Link
          className={BurgerIngredientsCardStyles.link}
          to={`/ingredient/${card._id}`}
          state={{ background: location }}
        >
          <div className={`${BurgerIngredientsCardStyles.counter} text text_type_digits-default`}>
            <Counter count={count} size={count < 99 ? 'default' : 'small'} extraClass="m-1" />
          </div>

          <div className='pl-4 pr-4'>
            <img src={card.image} alt="" />
          </div>
          <span className={`${BurgerIngredientsCardStyles.price} mt-1 text text_type_digits-default`}>
            {card.price}
            <CurrencyIcon type="primary" />
          </span>
          <h3 className={`mt-1 text text_type_main-default ${BurgerIngredientsCardStyles.name}`}>{card.name}</h3>
        </Link>
      </li>
    </>

  )
}

export default BurgerIngredientsCard; 