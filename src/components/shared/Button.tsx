import { FC } from "react";
const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="px-8 py-4 bg-teal-700 text-white rounded-full font-medium text-lg hover:shadow-lg duration-300 hover:scale-110">
      {text}
    </button>
  );
};

export default Button;
