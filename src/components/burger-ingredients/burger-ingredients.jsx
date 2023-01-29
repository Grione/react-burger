import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/propTypes';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import ingredientsStyles from './burger-ingredients.module.css';
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('buns')

  const { data } = props;

  const buns = useMemo(() => data.filter((el) => el.type === 'bun'), [data]);
  const mains = useMemo(() => data.filter((el) => el.type === 'main'), [data]);
  const sauces = useMemo(() => data.filter((el) => el.type === 'sauce'), [data]);

  /*   const parentRef = React.createRef();
    const ref = React.createRef();
    function scrollHandler() {
      const parentRectY = parentRef.current.getBoundingClientRect().y;
  
      const mainsY = ref.current.getBoundingClientRect().y;
      console.log(parentRectY);
      console.log('main:', mainsY)
    } */

  const [ref, inView, entry] = useInView({
    threshold: 0.7
  });
  const [ref2, inView2, entry2] = useInView({
    threshold: 1
  });
  const [ref3, inView3, entry3] = useInView({
    threshold: 0.1
  });

  return (
    <div className={ingredientsStyles.ingredients}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <ul className={`${ingredientsStyles.tabs} pt-5 pb-10`}>
        <li>
          <Tab
            value="buns"
            active={inView}
            onClick={setCurrent}>Булки</Tab>
        </li>
        <li>
          <Tab
            value="sauces"
            active={inView2}
            onClick={setCurrent}>Соусы</Tab>
        </li>
        <li>
          <Tab
            value="mains"
            active={inView3}
            onClick={setCurrent}>Начинки</Tab>
        </li>
      </ul>
      <div className={ingredientsStyles['list-wrapper']}>
        <InView inView={inView} inView2={inView2} inView3={inView3}>
          <BurgerIngredientsList ref={ref} ingredients={buns} title="Булки" />
          <BurgerIngredientsList ref={ref2} ingredients={sauces} title="Соусы" />
          <BurgerIngredientsList ref={ref3} ingredients={mains} title="Начинки" />
        </InView>
      </div>

    </div>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients; 