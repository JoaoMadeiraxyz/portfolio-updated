import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "JoaoMadeiraxyz",
  description: "Making art through code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
