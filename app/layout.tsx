import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/shared/providers";
import { CartProvider } from "@/components/shared/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test_ocomplex",
  description: "testing testing testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={inter.className}>
            <ReactQueryProvider>
              <CartProvider>
                <main>{children}</main>
              </CartProvider>
            </ReactQueryProvider>
          </body>
    </html>
  );
}
