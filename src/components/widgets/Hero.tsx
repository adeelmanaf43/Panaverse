import Wrapper from "../shared/Wrapper";
import HeroImage from "../../../public/hero.webp";
import Image from "next/image";
import Button from "@/components/shared/Button";
export default function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-0 md:flex-1">
            <h4 className="text-teal-700 font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-3xl md:text-5xl font-bold mt-3">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-6 text-lg text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-5">
              <Button text="Learn More" />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-0 md:flex-1">
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
