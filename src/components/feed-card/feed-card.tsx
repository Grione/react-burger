import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FeedIngredientIcon } from '../feed-ingredient-icon/feed-ingredient-icon';
import feedCardStyles from './feed-card.module.css';
import { useSelector } from '../../services/hooks';
import { TIngredient } from '../../types';

function inNotUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}

interface IFeedComponent {
  ingedients: string[];
  number: number;
  name: string;
  date: string;
  id: string
}

const FeedCard: FC<IFeedComponent> = (props) => {
  const location = useLocation();
  const number = props.number;
  const name = props.name;
  const date = props.date;
  const ingredients = props.ingedients;

  const allIngredients = useSelector((state) => state.ingredients.ingredients);
  const ingrCorrect = ingredients.filter((el) => typeof (el) === 'string');
  const ingrObjects = ingrCorrect.map(id => allIngredients.find((ingr: TIngredient) => id && ingr._id === id)).filter(inNotUndefined);

  const prices = ingrObjects.map(obj => obj && obj.price);

  const totalPrice = prices.reduce((price, acc) => price + acc, 0)



  const icons = ingrObjects.map((el, index) => (
    <FeedIngredientIcon
      key={index}
      src={el.image_mobile}
      srcSet={el.image_mobile}
      overflow={ingrObjects.length}
      extraClass="items_picture"
      zIndex={index}
    />
  ));

  return (
    <>
      <li>
        <Link className={feedCardStyles.item} to={`${number}`} state={{ background: location }}>
          <div className={feedCardStyles['item-row']}>
            <span className='text text_type_digits-default'>#{number}</span>
            <span className='text text_type_main-default text_color_inactive'>{date}</span>
          </div>
          <h2 className='mt-4 mb-6 text text_type_main-medium'>{name}</h2>
          <div className={feedCardStyles['item-row']}>
            <ul className="items_list">
              {icons.slice(0, 6)}
            </ul>
            <div className={feedCardStyles.price}>
              <span className='text text_type_digits-default'>{totalPrice}</span>
              <CurrencyIcon type='primary' />
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default FeedCard; 