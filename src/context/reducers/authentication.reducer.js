import {SET_CURRENT_USER} from '../actions/authentication.action'
import {SET_CATEGORIA} from '../actions/categorias.action'
import isEmpty from '../validations/isEmpty'



export default function(state , action ){
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case SET_CATEGORIA:
            return{
                ...state,
                catSelect:action.payload
            }
        default: 
            return state;
    }
}
