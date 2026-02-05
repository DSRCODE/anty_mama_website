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
    primary: "#592720",
    text: "#2A3439",
    muted: "#6B7280",
    border: "#E5E7EB",
    subtext: "white",
  },
  NURSE_CAM: {
    primary: "#800080",
    text: "#2A3439",
    subtext: "white",
    muted: "#6B7280",
    border: "#E5E7EB",
  },
};
