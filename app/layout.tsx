import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Web3ModalProvider } from "@/contexts/web3modal";
import { UserProvider } from "@/contexts/user";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Socio",
  description: "a web-3 based decentralized social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary-600 text-primary-200 max-w-xl mx-auto`}>
        <Web3ModalProvider>
          <UserProvider>

            {children}
          </UserProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
