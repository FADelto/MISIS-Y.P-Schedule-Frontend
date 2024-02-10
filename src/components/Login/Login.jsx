
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


const Login = ({auth, login, logout}) => {
    useEffect(()=>{
        console.log(auth + ' - ' + typeof auth);
    });


    return (
        <>
          {!auth ? (
            <button onClick={login}>Login</button>
          ) : (
            <Navigate to="/" />
          )}
        </>
    )
}

export default Login;
