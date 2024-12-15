"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase/firebase";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

type Credentials = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [user, authLoading] = useAuthState(auth);

  useEffect(() => {
    if (user && !authLoading) {
      router.push("/dashboard");
    }
  }, [user, authLoading, router]);

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleCrendentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      return toast.error("Missing Email or Password");
    }

    const result = await signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );

    if (result) {
      router.push("/dashboard");
      toast.success("Successfully Logged In");
    } else {
      toast.error("Invalid password or email.");
    }
  };

  return (
    <div className="">
      {/* Background Image */}
      <img
        src="/images/login-bg.svg"
        alt=""
        className="fixed inset-0 z-0 h-screen w-full object-cover"
      />

      <div className="font-body relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center min-h-[600px] text-white h-[calc(100vh-83px)] pb-36">
        <div className="px-10 text-center">
          <h1 className="text-3xl font-medium">Admin Login</h1>
          <h2 className="mt-3">Use the admin email and password to login.</h2>
        </div>
        <form
          action=""
          className="mt-6 flex w-full flex-col gap-5 px-10"
          onSubmit={handleLogin}
        >
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-2 outline-none text-black"
              placeholder="Email"
              onChange={handleCrendentialsChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-2 outline-none text-black"
              placeholder="Password"
              onChange={handleCrendentialsChange}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="cursor-pointer rounded-md bg-blue-500 py-2 text-sm"
          />
        </form>
        <Link href="/" className="mt-6 text-sm underline">
          Lost? Click to return to safety
        </Link>
      </div>
    </div>
  );
}
