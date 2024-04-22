import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body className={inter.className}>
        <NavBar />
        <div className="" style={{minHeight:'calc(100vh - 4rem)'}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
