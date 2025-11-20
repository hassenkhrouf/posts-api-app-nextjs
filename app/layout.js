import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Posts - Next.js App",
  description: "Posts page of Next.js App with API routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "#000",
            color: "#fff",
            alignItems: "center",
            gap: "1rem",
            fontSize: "1.5rem",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
