
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import HelloPage from './HelloPage/HelloPage'
import Registration from './Registration/Registration';

const Welcome = ({ auth, login, logout }) => {
  const [signIn, setSignIn] = useState(false);


  return (
    <>
      {!!auth && !signIn && (
        <Navigate to="/schedule" />
      )}
      {!auth && (
        <HelloPage login={login} setSignIn={setSignIn} />
      )}
      {signIn && (
        <Navigate to="/signin" />
      )}
    </>
  )
}

export default Welcome;
