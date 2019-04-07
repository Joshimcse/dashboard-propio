import {SET_CURRENT_USER} from '../actions/authentication.action'
import isEmpty from '../validations/isEmpty'
const initialState = {
    isAuthenticated: false,
    user: {}
}


export const auth = (state =initialState , action )=>{
    switch(action.type) {
        case SET_CURRENT_USER:
        console.log(action)
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}
