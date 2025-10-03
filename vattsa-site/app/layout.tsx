import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vattsa Mehta",
  description: "Personal site of Vattsa Mehta",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
