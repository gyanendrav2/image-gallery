import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from '../Reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const Store =
    window.location.hostname === 'localhost' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        ? createStore(
              RootReducer,
              compose(
                  applyMiddleware(thunk, sagaMiddleware, logger),
                  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
              )
          )
        : createStore(RootReducer, compose(applyMiddleware(thunk, sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

const dispatch = Store.dispatch;

export { Store, dispatch };
