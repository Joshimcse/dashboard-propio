import React, { useState,useEffect,useContext } from 'react'
import routes from '../routes'
import {Header, Sidebar, Workspace} from '../components/index.components'
import '../styles/Dashboard.css'
import AuthStateGlobal from '../context/AuthStateGlobal'


const Dashboard =(props) => {
	const context = useContext(AuthStateGlobal)
	const[open, setOpen] = useState({
			openValue:true
	})
	
	const handleClick=()=>{
			setOpen({
				openValue : !open.openValue
			})
	}
	
		useEffect(()=>{
	
		if(context.stateUser.isAuthenticated===false) {
			props.history.push('/login');
		}
	})
	console.log("dashboard")
    return (
    	<div>
    		<Header control_sidebar={handleClick} open={open.openValue}/>
        	<div className="container-fluid">
        		<div className="flex-xl-nowrap row">
          			<Sidebar open={open.openValue} rutas={routes}/>
								<Workspace rutas = {routes}/>
        		</div>
        	</div>
      </div>
    )

}

export default Dashboard