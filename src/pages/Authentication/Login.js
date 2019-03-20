import React , {useEffect, useContext} from 'react';
import AuthStateGlobal from '../../context/AuthStateGlobal'

const Login = (props) => {
    const context = useContext(AuthStateGlobal);
    useEffect(()=>{
		if(context.stateUser.isAuthenticated) {
			props.history.push('/');
		}
	})
    return (
        <div>
            Login
        </div>
    );
};

export default Login;