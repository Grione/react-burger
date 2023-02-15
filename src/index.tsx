import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers';


const store = compose(
  applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware()),
)(createStore)(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>

    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
