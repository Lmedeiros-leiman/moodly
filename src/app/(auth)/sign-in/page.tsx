'use client'
import Link from "next/link"
import Form from "next/form"

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
import { useState } from "react"
import { useRouter } from "next/navigation"
import Fallback from "@/components/fallback"
import { authRequest, SignInOAuth, SignUserIn } from "@/contexts/AuthProvider"


export default function LoginForm() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string>("")

  const [formData, setFormData] = useState<authRequest>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = async () => {
    setBusy(true)

    const { error } = await SignUserIn(formData);
    if (error) {
      console.error(error)
      setError(error.message)
    } else {
      setError("")
      setBusy(false)
      router.push("/dashboard")
    }
    setBusy(false)
  }

  const handleGoogleLogin = async () => {
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
        <CardTitle className="text-2xl">Sign-in</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form action={handleLogin} className="grid gap-4 mb-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            
            <Input
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              type="password"
              required />
          </div>
          <Button disabled={busy} type="submit" className="w-full">
            Sign in
          </Button>

        </Form>
        <Button disabled={busy} onClick={handleGoogleLogin} variant="outline" className="w-full">
          Sign in with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link  href={busy ? "#" : "/sign-up"} className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  </>)
}
