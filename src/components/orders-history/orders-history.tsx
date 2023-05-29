import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';

import FeedCard from '../feed-card/feed-card';
import FeedStyles from '../../pages/feed.module.css';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../../services/actions/websockets';

export function OrdersHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartUser());
    return () => {
      dispatch(wsConnectionClosedUser());
    };
  }, [dispatch]);

  const socket = useSelector((state) => state.userWsReducer.orders);

  if (socket.length > 0) {
    const orders = socket.map((order: any, index: number) => {
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
  } else {
    return null;
  }
}