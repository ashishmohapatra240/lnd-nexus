"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Add actual forgot password logic here
    console.log("Forgot password request for:", email);

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Link
          href="/login"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Login
        </Link>

        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Forgot Password
          </h1>
          <p className="text-slate-600">
            {isSubmitted
              ? "Check your email for reset instructions"
              : "Enter your email address and we'll send you a link to reset your password"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Email Sent!
              </h3>
              <p className="text-slate-600 mb-6">
                If an account exists with <strong>{email}</strong>, you will
                receive password reset instructions within a few minutes.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-slate-500">
                  Didn&apos;t receive an email? Check your spam folder or try
                  again.
                </p>
                <Button
                  onClick={handleTryAgain}
                  variant="outline"
                  className="w-full"
                >
                  Try Again
                </Button>
                <Link href="/login">
                  <Button variant="ghost" className="w-full">
                    Back to Login
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}

          {!isSubmitted && (
            <div className="mt-8 text-center">
              <p className="text-slate-600">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
