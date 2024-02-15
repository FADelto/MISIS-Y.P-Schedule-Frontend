
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import HelloPage from './HelloPage'

const Login = ({auth, login, logout}) => {
    useEffect(()=>{
        console.log(auth + ' - ' + typeof auth);
    });


    return (
        <>
          {!auth ? (
              <HelloPage login={login}/>
          ) : (
            <Navigate to="/schedule" />
          )}
        </>
    )
}

export default Login;
