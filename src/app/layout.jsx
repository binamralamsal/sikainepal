import { Inter } from "next/font/google";
import "./css-reset.css";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SikaiNepal",
  description: "Practical Wisdom, Real Skills",
};

export default async function RootLayout({ children }) {
  await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader />
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
