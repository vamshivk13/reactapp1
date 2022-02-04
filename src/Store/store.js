import {createStore} from 'redux'
import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage' 
import reducerPer from './reducer'


 
const persistConfig = {
    key: 'root',
    storage,
  }

 export let store=createStore(reducerPer)
export let persistor = persistStore(store)

  