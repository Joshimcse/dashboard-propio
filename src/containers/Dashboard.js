import React, { Component } from 'react'
import routes from '../routes'
import {Header, Sidebar, Workspace} from '../components/index.components'
import '../styles/Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
    	<div>
    		<Header/>
        	<div className="container-fluid">
        		<div className="flex-xl-nowrap row">
          			<Sidebar rutas={routes}/>
								<Workspace rutas = {routes}/>
        		</div>
        	</div>
      </div>
    )
  }
}

export default Dashboard