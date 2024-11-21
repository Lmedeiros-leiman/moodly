import React from "react"



const authContext = React.createContext({});

export const UseAuth = () => {
   return React.useContext(authContext);
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
   
   


   const value = {
      
   }
   
   return (
      <authContext.Provider value={value}>
         {children}
      </authContext.Provider>
   )
}