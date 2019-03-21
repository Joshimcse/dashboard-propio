import {SET_CURRENT_USER,DELETE_CURRENT_USER} from '../actions/authentication.action'
import isEmpty from '../validations/isEmpty'

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ){
    switch(action.type) {
  
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case DELETE_CURRENT_USER:
        localStorage.removeItem("jwt");
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }

        default: 
            return state;
    }
}
