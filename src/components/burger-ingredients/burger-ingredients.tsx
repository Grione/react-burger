import { useMemo, useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import ingredientsStyles from './burger-ingredients.module.css';
import { useInView } from 'react-intersection-observer';
import { TIngredients, TIngredient } from '../../types';

const BurgerIngredients = ({ data }: { data: TIngredients }) => {

  const buns = useMemo(() => data.filter((el: TIngredient) => el.type === 'bun'), [data]);
  const mains = useMemo(() => data.filter((el: TIngredient) => el.type === 'main'), [data]);
  const sauces = useMemo(() => data.filter((el: TIngredient) => el.type === 'sauce'), [data]);

  const [currenTab, setCurrentTab] = useState("buns")

  const [refBuns, inViewBuns] = useInView({
    threshold: 0.2
  });
  const [refMains, inViewMains] = useInView({
    threshold: 0.2
  });
  const [refSauces, inViewSauces] = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("buns");
    } else if (inViewSauces) {
      setCurrentTab("sauces");
    } else if (inViewMains) {
      setCurrentTab("mains");
    }
  }, [inViewBuns, inViewMains, inViewSauces])

  const onTabClick = (tab:string) => {
    setCurrentTab(tab);
    const el = document.getElementById(tab);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={ingredientsStyles.ingredients}>
      <h1 className='text text_type_main-large pt-10'>Соберите бургер</h1>
      <ul className={`${ingredientsStyles.tabs} pt-5 pb-10`}>
        <li>
          <Tab
            value="buns"
            active={currenTab === "buns"}
            onClick={onTabClick}
          >Булки</Tab>
        </li>
        <li>
          <Tab
            value="sauces"
            active={currenTab === "sauces"}
            onClick={onTabClick}
          >Соусы</Tab>
        </li>
        <li>
          <Tab
            value="mains"
            active={currenTab === "mains"}
            onClick={onTabClick}
          >Начинки</Tab>
        </li>
      </ul>
      <div className={ingredientsStyles['list-wrapper']}>
        <BurgerIngredientsList ref={refBuns} ingredients={buns} titleId={"buns"} title="Булки" />
        <BurgerIngredientsList ref={refSauces} ingredients={sauces} titleId={"sauces"} title="Соусы" />
        <BurgerIngredientsList ref={refMains} ingredients={mains} titleId={"mains"} title="Начинки" />
      </div>

    </div>
  )
}

export default BurgerIngredients; 