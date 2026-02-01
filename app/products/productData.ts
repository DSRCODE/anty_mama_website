export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  tags?: string[];
};

export const PRODUCT_DATA: Record<"ANTY_MAMA" | "NURSE_CAM", Product[]> = {
  ANTY_MAMA: [
    {
      id: "am-1",
      name: "Non-Stick Frying Pan",
      price: 2499,
      category: "Pans",
      image: "https://images.unsplash.com/photo-1604908554265-7b3b7d593c97",
      description:
        "High-quality non-stick pan with even heat distribution, perfect for daily cooking.",
    },
    {
      id: "am-2",
      name: "Cast Iron Kadai",
      price: 3299,
      category: "Kadai",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      description:
        "Reliable HD camera system designed for continuous patient monitoring.",
    },
    {
      id: "am-3",
      name: "Cookware Combo Set",
      price: 6999,
      category: "Sets",
      image: "https://images.unsplash.com/photo-1588167056547-c183313da47c",
      description:
        "Reliable HD camera system designed for continuous patient monitoring.",
    },
  ],

  NURSE_CAM: [
    {
      id: "nc-1",
      name: "Nurse Cam Pro",
      price: 12999,
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1580281657521-6bd6c85d6e10",
      description:
        "Reliable HD camera system designed for continuous patient monitoring.",
    },
    {
      id: "nc-2",
      name: "ICU Monitoring System",
      price: 29999,
      category: "Monitoring",
      image: "https://images.unsplash.com/photo-1582719478141-1ff5cbd35c09",
      description:
        "Reliable HD camera system designed for continuous patient monitoring.",
    },
  ],
};
