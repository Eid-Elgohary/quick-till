"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { loginSchema } from "@/schemas/loginSchema";
import { loginUser } from "@/firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const firstError = result.error.errors[0].message;
      setError(firstError);
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);

      router.push("/admin");
      console.log(result.data);
    } catch (err: any) {
      setError("Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center capitalize h-screen w-screen">
      <div>
        <h1 className="text-4xl font-bold text-primary text-center mb-8 tracking-wider">
          quick till
        </h1>

        <div className="p-8 bg-secondary rounded-xl shadow">
          <h2 className="text-2xl text-center mb-4">login!</h2>
          <p className="mb-10">
            Please enter your credentials below to continue
          </p>

          {error && (
            <p className="text-destructive text-center font-medium mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4 grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="email"
                type="email"
                placeholder="enter your email"
              />
            </div>

            <div className="grid mb-4 w-full max-w-sm items-center gap-3">
              <Label htmlFor="password">password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="password"
                type="password"
                placeholder="enter your password"
              />
            </div>

            <div className="mb-6 text-primary font-lighter">
              <Link href="forgetpassword">forget password ?</Link>
            </div>

            <div className="flex justify-center items-center gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? <ClipLoader size={20} color="#fff" /> : "login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
