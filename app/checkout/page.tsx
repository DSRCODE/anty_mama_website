"use client";

import AuthModal from "../auth/AuthModal";
import { useAuth } from "../providers/AuthProvider";

export default function CheckoutPage() {
  const { user } = useAuth();

  if (!user) {
    return <AuthModal />;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="text-gray-600">Secure checkout powered by Anty Mama LLC</p>
    </main>
  );
}
