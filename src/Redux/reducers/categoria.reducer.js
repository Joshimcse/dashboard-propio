import {SET_CATEGORIA} from '../actions/categorias.action'

export const categoria =(state={catSelect:10} , action )=>{
    switch(action.type) {
        case SET_CATEGORIA:
            return{
                ...state,
                catSelect:action.payload
            }
        default: 
            return state;
    }
}