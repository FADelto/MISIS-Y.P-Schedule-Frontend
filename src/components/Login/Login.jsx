
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import HelloPage from './HelloPage'
import Registration from './Registration';

const Login = ({ auth, login, logout }) => {
  const [signOn, setSignOn] = useState(false);


  return (
    <>
      {!!auth && !signOn && (
        <Navigate to="/schedule" />
      )}
      {!auth && (
        <HelloPage login={login} setSignOn={setSignOn} />
      )}
      {signOn && (
        <Navigate to="/register" />
      )}
    </>
  )
}

export default Login;
