"use client";

import { ModeToggle } from "@/components/ui/modeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { sendResetPasswordLink } from "@/firebase/auth";
import Link from "next/link";
import { emailSchema } from "@/schemas/emailSchema";

function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function recoverPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    const result = emailSchema.safeParse(email);

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    try {
      setLoading(true);
      await sendResetPasswordLink(email);
      setMessage("Reset link sent. Please check your inbox.");
    } catch (err: any) {
      setError("Failed to send reset link. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center capitalize h-screen w-screen flex-col">
      <ModeToggle />

      <div>
        <h1 className="text-4xl font-bold text-primary text-center mb-8 tracking-wider">
          quick till
        </h1>

        <div className="p-8 bg-secondary rounded-xl shadow">
          <h2 className="text-2xl text-center mb-4">forget password</h2>
          <p className="text-center mb-6">
            Enter your email address to reset your password
          </p>

          {error && (
            <p className="text-destructive text-center font-lighter mb-4">
              {error}
            </p>
          )}

          {message && (
            <p className="text-[#37D101] text-center font-medium mb-4">
              {message}
            </p>
          )}

          <form onSubmit={recoverPassword}>
            <div className="mb-4 grid w-full max-w-sm items-center gap-3">
              <Label className="font-medium tracking-wide" htmlFor="email">
                email
              </Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="email"
                type="email"
                placeholder="enter your email"
              />
            </div>

            <div className="flex my-6 flex-wrap justify-center items-center gap-2 md:flex-row">
              <Button disabled={loading} type="submit" className="primary">
                {loading ? (
                  <ClipLoader size={20} color="#fff" />
                ) : (
                  "reset password"
                )}
              </Button>
            </div>
          </form>

          <div className="text-center mt-4">
            Back to{" "}
            <Link href="/login" className="text-primary font-bold">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
