import {
  createStore,
  applyMiddleware,
} from 'redux'


import createSageMiddleware  from 'redux-saga'

import reducer from '../reducers'
import rootSaga from '../saga'

const sagaMiddleware = createSageMiddleware();


export default function configureStore(){
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);
    return store
}