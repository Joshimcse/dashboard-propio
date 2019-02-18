import {Home, Otros, SubMenu} from './pages/index.pages'

export default{
    paginas:[
        {
            path: '/',
            nombre: 'Home',
            tipo: 'link',
            component: Home
        },
        {
            path: '/otros',
            nombre: 'Otros',
            tipo: 'link',
            component: Otros
        },
        {
            path: '/menu',
            nombre: 'Menú',
            tipo: 'menu',
            submenu: [{
                path: '/submenu',
                name: 'Submenu',
                component: SubMenu
              }
            ]
          }
    ]
}