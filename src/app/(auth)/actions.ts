import { createClient } from "@/lib/Supabase/components";


const supabase = createClient();


export type authRequest = {
   email: string;
   password: string;
}

export async function SignUserIn(authData : authRequest) {
   const response = await supabase.auth.signInWithPassword(authData);
   return response
}

export async function SignUserUp(authData : authRequest) {
   const response = await supabase.auth.signUp(authData);
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