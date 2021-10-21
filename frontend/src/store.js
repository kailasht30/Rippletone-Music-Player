import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/UserReducers';
import {
  addToPlayListReducer,
  removeFromPlayListReducer,
  songCreateReducer,
  songDeleteReducer,
  songDetailsReducer,
  songListReducer,
  songUpdateReducer,
} from './reducers/SongReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  songList: songListReducer,
  songDetails: songDetailsReducer,
  songDelete: songDeleteReducer,
  songCreate: songCreateReducer,
  songUpdate: songUpdateReducer,
  addToPlayList: addToPlayListReducer,
  removeFromPlayList: removeFromPlayListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
