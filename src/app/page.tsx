import Image from "next/image";

import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
("@/components/widgets/ProgramOutcome");
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Core Tracks */}
      <CoreTracks />
      {/* Specialized Tracks */}
      <SpecializedTracks />
      {/* Outcome Section */}
      <ProgramOutcome />
    </div>
  );
}
