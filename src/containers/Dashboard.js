import React, { Component } from 'react'
import routes from '../routes'
import {Header, Sidebar, Workspace} from '../components/index.components'
import '../styles/Dashboard.css'

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state ={
			open : true
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
			this.setState({
					open : !this.state.open
			})
	}
	
  render() {
    return (
    	<div>
    		<Header control_sidebar={this.handleClick}/>
        	<div className="container-fluid">
        		<div className="flex-xl-nowrap row">
          			<Sidebar open={this.state.open} rutas={routes}/>
								<Workspace rutas = {routes}/>
        		</div>
        	</div>
      </div>
    )
  }
}

export default Dashboard