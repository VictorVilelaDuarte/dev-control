import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev - control",
  description: "Generencie seus clientes e atendimentos de forma simples.",
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
