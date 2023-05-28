import { useParams } from "react-router-dom";
import { FeedIngredientIcon } from "../components/feed-ingredient-icon/feed-ingredient-icon";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from './order-detail.module.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderAction } from "../services/actions/getOrder-actions";
import { useSelector } from "../services/hooks";
import { TIngredient, TOrder } from "../types";

export function OrderDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch()<any>;

  useEffect(() => {
    dispatch(getOrderAction(id))
  }, [dispatch, id])

  const { order } = useSelector((state) => state.getOrderReducer);
  const allIngredients = useSelector((state) => state.ingredients.ingredients);

  if (order.ingredients !== null && order.ingredients !== undefined && allIngredients.length > 0) {
    const ingrObjects = order.ingredients.map((id) => allIngredients.find((ingr) => ingr._id === id));
    const isIngrObjects = ingrObjects.some((el)=> el === undefined || el === null )
    let totalPrice;
    let prices = [];

    let ingredients = null;

    if (!isIngrObjects && ingrObjects.length > 0) {
      prices = ingrObjects.map((obj) => obj!.price);
      totalPrice = prices.reduce((acc, price) => price + acc, 0);

      ingredients = ingrObjects.map((el) =>
      (
        <li className={Styles.card} key={el?._id}>
          {el?.image_mobile ? <FeedIngredientIcon src={el?.image_mobile} srcSet={el?.image_mobile} zIndex={1} /> : ''}
          <h2 className="text text_type_main-default ml-4">{el?.name}</h2>
          <div className={Styles.total}>
            <span className="text text_type_digits-default ml-4">{`${el?.price}`}</span>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      )
      )
    } 

    return (
      <>
        <div className={Styles.main}>
          <span className="text text_type_digits-default" style={{ "textAlign": "center" }}>{id}</span>
          <h1 className="text text_type_main-medium mt-10 mb-3">{order.name}</h1>
          <span className="text text_type_main-small is-succes">{order.status}</span>

          <span className="text text_type_main-medium mt-15 mb-6">Состав:</span>

          <ul className={`${Styles.ingredients} pr-6 mb-10`}>
            {ingredients}
          </ul>
          <div className={Styles.bottom}>
            <span className="text text_type_main-default text_color_inactive">{order.createdAt}</span>
            <div className={Styles.total}>
              <span className="text text_type_digits-default">{totalPrice}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>


      </>
    )
  } else {
    return null;
  }

}