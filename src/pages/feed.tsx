import { useEffect } from 'react';
import { useSelector, useDispatch  } from '../services/hooks';
import FeedCard from '../components/feed-card/feed-card';
import FeedStyles from './feed.module.css';
import { wsConnectionStart, wsConnectionClosed } from '../services/actions/websockets';
import { IWsObj } from '../types';

export function FeedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  const data = useSelector((state) => state.wsReducer);

  if (data.orders.length > 0) {

    const ordersDone = data.orders.filter(
      (order: { status: string }) => order.status === "done"
    );
    const ordersReady = data.orders.filter(
      (order: { status: string }) => order.status !== "done"
    );

    return (
      <div className={FeedStyles.wrapper}>
        <h1 className="text text_type_main-large mt-10 mb-10">Лента заказов</h1>
        <div className={FeedStyles.row}>
          <ul className={FeedStyles.list}>
            {
              data.orders.map((order: IWsObj, index: number) => {
                return (
                  <FeedCard
                    ingedients={order.ingredients}
                    number={order.number}
                    name={order.name}
                    date={order.updatedAt}
                    id={order._id}
                    key={index}
                  />
                )
              })
            }
          </ul>
          <div>
            <div className={[FeedStyles.info, 'mb-15'].join(' ')}>
              <div className={FeedStyles.col}>
                <h4 className='text text_type_main-medium mb-6'>Готовы:</h4>
                {
                  ordersDone.slice(0, 10).map((el:{number:string}) => (
                    <p key={el.number} className={`text text_type_digits-default mb-2 ${FeedStyles.done}`}>{el.number}</p>
                  ))
                }
              </div>
              <div className={FeedStyles.col}>
                <h4 className='text text_type_main-medium mb-6'>В работе:</h4>
                {
                  ordersReady.slice(0, 10).map((el:{number:string}) => (
                    <p key={el.number} className='text text_type_digits-default mb-2'>{el.number}</p>
                  ))
                }
              </div>
            </div>
            <div className='mb-15'>
              <h4 className='text text_type_main-medium'>Выполнено за все время:</h4>
              <span className='text text_type_digits-large active_digit'>{data.total}</span>
            </div>
            <div className='mb-15'>
              <h4 className='text text_type_main-medium'>Выполнено за сегодня:</h4>
              <span className='text text_type_digits-large active_digit'>{data.totalToday}</span>
            </div>
          </div>

        </div>
      </div>
    )
  } else {
    return null;
  }

}
