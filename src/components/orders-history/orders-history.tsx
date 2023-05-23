import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FeedCard from '../feed-card/feed-card';
import FeedStyles from '../../pages/feed.module.css';
import { USER_WS_CONNECTION_START } from '../../services/action-types';

export function OrdersHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: USER_WS_CONNECTION_START
    });

    return () => {
      dispatch({
        type: USER_WS_CONNECTION_START
      })
    }
  }, [dispatch]);

  const socket = useSelector((state: any) => state.userWsReducer.orders);

  const orders = socket.orders.map((order:any, index:number) => {
    return (
      <FeedCard
        key={index}
        number={order.number}
        name={order.name}
        ingedients={order.ingredients}
        date={order.updatedAt}
        id={order._id}
      />
    )
  })

  return (
    <ul className={FeedStyles.list}>
      {orders}
    </ul>
  )
}