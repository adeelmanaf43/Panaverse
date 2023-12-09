import { FC } from "react";
interface IProps {
  header: string;
  description: string;
  number: number;
  hasBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({
  header,
  description,
  number,
  hasBorder = true,
}) => {
  return (
    <div
      className={`rounded-md flex-1 px-8 py-16 relative flex flex-col justify-center ${
        hasBorder && "border"
      }`}
    >
      <h4 className="font-bold text-lg">{header}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="absolute text-gray-200 -z-10 =top-10 right-10 text-[170px] font-bold z">
        {number}
      </div>
    </div>
  );
};

export default QuarterBox;
