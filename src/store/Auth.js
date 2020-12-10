import React, { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const Auth = (props) => {
  const [auth, isAuth] = useState(true);

  useEffect(() => { isAuth(true) },[]);
  
  return (
    <AuthContext.Provider value={[ auth, isAuth]}>
          {props.children}
    </AuthContext.Provider>
  );
}