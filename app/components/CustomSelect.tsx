import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Category {
  id: string;
  name: string;
  createdAt: {
    type: string;
    seconds: number;
    nanoseconds: number;
  };
  image?: string;
  status?: boolean;
}

interface CustomSelectProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

export default function CustomSelect({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full px-5 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm
          flex justify-between items-center text-sm
         
          transition duration-200 ease-in-out
        "
      >
        {selectedCategory === "all"
          ? "All Categories"
          : categories.find((cat) => cat.id === selectedCategory)?.name}
        <FiChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          className="
            absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg
            max-h-60 overflow-auto
            text-sm
            animate-slideDown
          "
        >
          <li
            className="px-5 py-2 cursor-pointer text-gray-800 hover:bg-indigo-100 transition"
            onClick={() => {
              setSelectedCategory("all");
              setOpen(false);
            }}
          >
            All Categories
          </li>
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="px-5 py-2 cursor-pointer text-gray-800 hover:bg-indigo-100 transition"
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpen(false);
              }}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      )}

      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
