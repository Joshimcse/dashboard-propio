import { combineReducers} from 'redux';
import {auth} from './authentication.reducer'
import {categoria} from './categoria.reducer'

export default combineReducers({
    auth,
    categoria
})