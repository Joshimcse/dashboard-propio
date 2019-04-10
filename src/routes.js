import {Categorias,Productos} from './pages/index.pages'

export default{
    paginas:[
        /*{
            path: '/',
            nombre: 'Home',
            tipo: 'link',
            component: Home
        },*/
        {
            path: '/',
            nombre: 'Home',
            tipo: 'link',
            component: Categorias
        },
        {
            path: '/prod/:id',
            nombre: 'Productos',
            tipo: 'link',
            component: Productos
        }
    ]
}