"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main>
      <h1>লগইন</h1>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="ইমেইল"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="পাসওয়ার্ড"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">লগইন করুন</button>
      </form>

      <p>{message}</p>
    </main>
  );
}
