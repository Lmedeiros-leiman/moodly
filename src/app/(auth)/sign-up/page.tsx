'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Fallback from "@/components/fallback"
import { useState } from "react"
import Form from "next/form"
import { useRouter } from "next/navigation"
import { authRequest, SignInOAuth, SignUserUp } from "@/contexts/AuthProvider"



export default function SignUpPage() {

   const [error, setError] = useState("");
   const [busy, setBusy] = useState(false);
   const [formData, setFormData] = useState<authRequest>({
      email: "",
      password: "",
   });

   const router = useRouter();

   const handleSingnUp = async () => {
      setBusy(true)

      const { error } = await SignUserUp(formData)
      if (error) {
         console.error(error)
         setError(error.message)
      } else {
         setError("")
         setBusy(false)
         router.push("/")
      }

      setBusy(false)
   }
   const googleLogin = async () => {
      setBusy(true)

      const { error } = await SignInOAuth();
      if (error) {
         console.error(error)
         setError(error.message)
      } else {
         setError("")
         
      }
      setBusy(false)
   }

   return (<>

      <Fallback condition={error !== ""} className="w-full justify-center flex mb-3.5" >
         <div className="bg-red-600/50 text-white px-3 py-1 rounded max-w-80 w-full outline outline-red-200">
            {error}
         </div>
      </Fallback>
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-2xl">Sign-up</CardTitle>
            <CardDescription>
               Enter your email below to create to your account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Form action={handleSingnUp} className="grid gap-4 mb-3.5">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="email@example.com"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>

                  </div>
                  <Input
                     id="password"
                     type="password"
                     value={formData.password}
                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                     required />
               </div>

               <Button disabled={busy} type="submit" className="w-full">
                  Sign up
               </Button>
            </Form>
            <Button disabled={busy} onClick={googleLogin} variant="outline" className="w-full">
               Sign up with Google
            </Button>


            <div className="mt-4 text-center text-sm">
               Already have an account?{" "}
               <Link href={busy ? "#" : "/sign-in"} className="underline">
                  Sign in
               </Link>
            </div>
            
         </CardContent>
      </Card>


   </>)
}
