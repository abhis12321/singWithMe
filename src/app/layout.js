import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="bg-gray-300 text-gray-700 dark:bg-slate-950 dark:text-white">
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
