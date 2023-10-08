import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "natan`s suduko app",
  description: "natan`s suduko app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col sm:gap-8 gap-6 items-center justify-center p-8 min-h-[100vh] bg-mainbg transition-transform duration-300 ease-in-out `}
      >
        <header> header</header>
        {children}
        <footer> footer</footer>
      </body>
    </html>
  );
}
