import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { bondReducer } from './bond'
import { daoReducer } from './dao'
import { poolReducer } from './pool'
import { reserveReducer } from './reserve'
import { routerReducer } from './router'
import { spartaReducer } from './sparta'
import { synthReducer } from './synth'
import { uiReducer } from './ui'
import { utilsReducer } from './utils'
import { web3Reducer } from './web3'

const reducers = combineReducers({
  bond: bondReducer,
  dao: daoReducer,
  pool: poolReducer,
  reserve: reserveReducer,
  router: routerReducer,
  sparta: spartaReducer,
  synth: synthReducer,
  ui: uiReducer,
  utils: utilsReducer,
  web3: web3Reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers
    ? composeEnhancers(applyMiddleware(thunk))
    : applyMiddleware(thunk),
)

export default store
