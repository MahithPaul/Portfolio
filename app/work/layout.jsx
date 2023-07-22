"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import style from "@/app/css/main.module.css";
import Navbar from "@/app/components/Navbar";
import SocialLinks from "@/app/components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>Mahith Paul 🚀</title>
      </head>
      <body className={inter.className}>
        <div className={style.bg}>
          <Navbar />
          <div className={style.main}>
            {children}
            <SocialLinks />
          </div>
        </div>
      </body>
    </html>
  );
}
