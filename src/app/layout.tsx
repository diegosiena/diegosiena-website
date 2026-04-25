import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Siena",
  description: "Diego Siena — personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
