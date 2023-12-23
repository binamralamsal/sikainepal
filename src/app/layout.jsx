import { Inter } from "next/font/google";
import "./css-reset.css";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SikaiNepal",
  description: "Practical Wisdom, Real Skills",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
