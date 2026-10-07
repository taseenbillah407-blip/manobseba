import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "মানব সেবা ফাউন্ডেশন",
  description: "মানুষের সেবায়, মানবতার পাশে",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
