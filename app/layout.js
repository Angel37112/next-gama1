import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import PiePagina from "./components/PiePagina";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Gama1",
  description: "Página #1 en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <div className="flex-grow">{children}</div>
      <PiePagina />
    </div>
  );
}
