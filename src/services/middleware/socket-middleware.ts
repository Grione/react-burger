import { Middleware } from "redux";
import { TWSActions } from '../../types'

export const socketMiddleware = (url: () => string, actions: TWSActions): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsInit,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = actions;

      if (type === wsInit) {
        socket = new WebSocket(url());
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parseData = JSON.parse(data);
          dispatch({
            type: onMessage,
            payload: {
              data: parseData,
              timestamp: new Date().getTime() / 100,
            },
          })
        }

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };


      }

      next(action);


    }
  }
}