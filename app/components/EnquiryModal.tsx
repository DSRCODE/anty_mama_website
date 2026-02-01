"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnquiry } from "@/lib/firestore";

interface ProductInfo {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
}

interface EnquiryModalProps {
  product: ProductInfo;
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({
  product,
  open,
  onClose,
}: EnquiryModalProps) {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form using API helper
  const handleSubmit = async () => {
    const { name, contact, address, city, state, email } = enquiryForm;

    // Validate required fields
    if (!name || !contact || !address || !city || !state) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      await submitEnquiry({
        name,
        email,
        contact,
        address,
        city,
        state,
        product,
      });

      setSuccess(true);
      setEnquiryForm({
        name: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        state: "",
      });

      // Close modal after 2s
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Product Enquiry
            </h2>

            {success && (
              <p className="text-green-600 font-semibold mb-4">
                Enquiry submitted successfully!
              </p>
            )}

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={enquiryForm.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-800 border-gray-300 border rounded-lg outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
                value={enquiryForm.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg outline-none text-gray-800 border-gray-300"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number *"
                value={enquiryForm.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg outline-none text-gray-800 border-gray-300"
              />
              <input
                type="text"
                name="address"
                placeholder="Address *"
                value={enquiryForm.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg outline-none text-gray-800 border-gray-300"
              />
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={enquiryForm.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg outline-none text-gray-800 border-gray-300"
              />
              <input
                type="text"
                name="state"
                placeholder="State *"
                value={enquiryForm.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg outline-none text-gray-800 border-gray-300"
              />
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={onClose}
                className="px-5 py-3 text-gray-800 border-gray-400 rounded-lg border hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-5 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
