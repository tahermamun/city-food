import axios from 'axios'
import { FOOD_TYPE } from './foodType'

export const fetchFoodAction = foods => {
    return {
        type: FOOD_TYPE,
        payload: foods
    }
}

export const fetchFoodData = (n) => {
    return (dispatch) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`)
            .then(res => {
                dispatch(fetchFoodAction(res.data.meals))
            })
    }
}