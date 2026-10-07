"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function DashboardPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email ?? "");
      }
    }

    getUser();
  }, [supabase]);

  return (
    <main>
      <h1>মানব সেবা ফাউন্ডেশন Dashboard</h1>
      <p>লগইন সফল হয়েছে।</p>
      <p>{email}</p>
    </main>
  );
}
