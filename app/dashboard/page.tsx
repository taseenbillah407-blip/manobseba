import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>মানব সেবা ফাউন্ডেশন Dashboard</h1>
      <p>আপনি সফলভাবে লগইন করেছেন।</p>
      <p>{user.email}</p>
    </main>
  );
}
