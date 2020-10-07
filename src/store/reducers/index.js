import {combineReducers} from 'redux';
import homeTabBarReducer from './homeTabBar.reducer'

export default combineReducers({
    homeTab: homeTabBarReducer,
})