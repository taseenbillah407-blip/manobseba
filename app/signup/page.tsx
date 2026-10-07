"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setMessage(error ? error.message : "নিবন্ধন সফল হয়েছে");
  }

  return (
    <main>
      <h1>সদস্য নিবন্ধন</h1>

      <form onSubmit={signup}>
        <input
          placeholder="আপনার নাম"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">নিবন্ধন করুন</button>
      </form>

      <p>{message}</p>
    </main>
  );
}
