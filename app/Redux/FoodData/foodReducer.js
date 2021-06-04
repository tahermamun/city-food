import { FOOD_TYPE } from "./foodType";


const initialState = () => {
    foods: []
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_TYPE: return {
            ...state,
            foods: action.payload

        }
        default: return state

    }
}


export default foodReducer

