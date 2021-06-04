import { combineReducers } from 'redux'

import foodReducer from './FoodData/foodReducer'

const rootReducer = combineReducers({
    foodData: foodReducer
})

export default rootReducer;