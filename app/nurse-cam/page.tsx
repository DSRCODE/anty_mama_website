import { Metadata } from "next";
import NurseHero from "../components/nurse-cam/NurseHero";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Nurse Cam | Nursing Education",
  description: "Professional nursing education products by Nurse Cam.",
};

export default function NurseCamPage() {
  return (
    <main>
      <NurseHero />
    </main>
  );
}
