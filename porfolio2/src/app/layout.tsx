import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/navbar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ['latin'], // Specify subsets like 'latin' or 'cyrillic'
  weight: ['300', '400', '500', '600', '700'], // Specify weights as needed
});

export const metadata: Metadata = {
  title: "PORFOLIO",
  description: "Made By Mohsin Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
