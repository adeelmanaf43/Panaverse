import Wrapper from "@/components/shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";
const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack template and API Product Development",
    number: 3,
  },
];
export default function CoreTracks() {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-sm">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by competing the
            following three courses.
          </p>
          <div className="mt-4">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-10 gap-y-6 items-stretch mx-auto">
          {CoreTracksData.map((item: any) => (
            <QuarterBox
              key={item.number}
              description={item.description}
              header={item.header}
              number={item.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
