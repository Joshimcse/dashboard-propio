import {Home,Categorias} from './pages/index.pages'

export default{
    paginas:[
        {
            path: '/',
            nombre: 'Home',
            tipo: 'link',
            component: Home
        },
        {
            path: '/categorias',
            nombre: 'Categorias',
            tipo: 'link',
            component: Categorias
        }
    ]
}