import { Inter } from "next/font/google";
import "@styles/globals.css";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sai Preethi Pantangi",
  description: "Sai Preethi Pantangi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Home children={children}/>
      </body>
    </html>
  );
}
