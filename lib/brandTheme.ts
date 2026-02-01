import { Brand } from "@/app/providers/BrandProvider";

export const brandTheme: Record<
  Brand,
  {
    primary: string;
    text: string;
    muted: string;
    border: string;
    subtext: string;
  }
> = {
  ANTY_MAMA: {
    primary: "#592720", // Brown
    text: "#2A3439",
    muted: "#6B7280", // gray-500
    border: "#E5E7EB", // gray-200
    subtext: "white",
  },
  NURSE_CAM: {
    primary: "#006D6F", // Medical green
    text: "#2A3439",
    subtext: "white",
    muted: "#6B7280",
    border: "#E5E7EB",
  },
};
