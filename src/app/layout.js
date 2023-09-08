import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Feed from "@/components/Feed";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen bg-gray-50"}>
        <Header />
        <Feed />

        {children}
      </body>
    </html>
  );
}
