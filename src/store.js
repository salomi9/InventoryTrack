import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  sidebarShow: 'responsive',
  userType: '',
  userId: '',
  buId: '',
  sesssionExpire: '',
  project: 'InventoryTrack'
}
export const changeState = (state = initialState, { type, ...rest }) => {
  console.log("state: ", state, "type: ", type, "rest: ", rest);
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    case 'userType':
      return { ...state, ...rest };
    case 'userId':
      return { ...state, ...rest };
    case 'buId':
      return { ...state, ...rest };
    case 'name':
      return { ...state, ...rest };
    case 'sesssionExpire':
      return { ...state, ...rest };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, changeState)

const store = createStore(
  persistedReducer,
  //changeState,
  // allReducers,
  composeEnhancer()
)
export default store;