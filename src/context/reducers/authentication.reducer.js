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
        case 'addCart':
            let item= state.productsCart.find(item=> action.payload.id === item.id)
            if(item){
                item.cantidad+=1
                return{
                    ...state,
                     total: state.total + item.precio 
                      }
            }else{
                return{
                    ...state,
                    total: state.total + action.payload.precio,
                    productsCart: [...state.productsCart, action.payload]
                }
            }

        default: 
            return state;
    }
}
