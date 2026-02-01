import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "./providers/AuthProvider";
import { BrandProvider } from "./providers/BrandProvider";
import { CartProvider } from "./providers/CartProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Anty Mama LLC | Cookware & Nursing Education",
    template: "%s | Anty Mama LLC",
  },
  description:
    "Anty Mama LLC offers premium cookware and trusted nursing education products worldwide.",
  openGraph: {
    title: "Anty Mama LLC",
    description: "Two brands. One trusted checkout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <BrandProvider>
            <CartProvider>
              <body className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </body>
            </CartProvider>
          </BrandProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
