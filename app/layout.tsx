import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "./providers/AuthProvider";
import { BrandProvider } from "./providers/BrandProvider";
import { CartProvider } from "./providers/CartProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import ReduxProvider from "./providers/ReduxProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Anty Mama LLC | Cookware & Nursing Education",
    template: "%s | Anty Mama LLC",
  },
  description:
    "Anty Mama LLC offers premium cookware and trusted nursing education products worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ReduxProvider>
          <AuthProvider>
            <BrandProvider>
              <CartProvider>
                <Navbar />

                <main className="flex-1">{children}</main>

                <Footer />
                <Toaster richColors position="top-right" />
              </CartProvider>
            </BrandProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
