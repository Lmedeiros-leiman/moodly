'use client'
import React, { useEffect, useState } from "react"
import { createClient } from "@/lib/Supabase/components";
import { Session } from "@supabase/supabase-js";


const authContext = React.createContext<AuthContextType>({
   Session: null,
   setSession: () => { },
   busy: true,
   setBusy: () => { },
});
const supabase = createClient();



export type authRequest = {
   email: string;
   password: string;
   remenberUser?: boolean;
}

export async function SignUserIn(authData : authRequest) {
   const response = await supabase.auth.signInWithPassword({
      password: authData.password,
      email: authData.email,
   });
   
   return response
}

export async function SignUserUp(authData : authRequest) {
   const response = await supabase.auth.signUp({
      password: authData.password,
      email: authData.email,
   });
   return response
}

export async function SignInOAuth() {
   return await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
         redirectTo: "./dashboard",
         queryParams: {
            access_type: 'offline',
            prompt: 'consent',
         },
      },
   });
}

export async function LogOut() {
   return await supabase.auth.signOut();
}

type AuthContextType = {
   Session: Session | null;
   setSession: React.Dispatch<React.SetStateAction<Session | null>>;
   busy: boolean;
   setBusy: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UseAuth = () => {
   return React.useContext<AuthContextType>(authContext);
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
   
   const [Session, setSession] = useState< Session | null>(null);
   const [busy,setBusy] = useState(true);

   useEffect( () => {
      async function checkUser() {
         // automatically fetches the cached user/ user session
         const {data} = await supabase.auth.getSession();
         if (data) { setSession(data.session);}
         
      }

      
      checkUser().finally( () => setBusy(false));
   },[]);


   const value = {
      Session, setSession,
      busy, setBusy,
   }
   
   return (
      <authContext.Provider value={value}>
         {children}
      </authContext.Provider>
   )
}

