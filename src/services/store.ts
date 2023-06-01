import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socket-middleware';
import { wsUrl } from "../utils/constants";
import { wsActions, wsActionsUser } from './actions/websockets';
import { getCookie } from '../utils/cookie';

export const store = compose(
  applyMiddleware(
    thunk,
    socketMiddleware(() => wsUrl + '/all', wsActions),
    socketMiddleware(() => wsUrl + `?token=${getCookie('accessToken')}`, wsActionsUser)),
  composeWithDevTools(applyMiddleware()),
)(createStore)(rootReducer);
