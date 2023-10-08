export interface IStack {
  title?: string;
  color?: string;
}

const Stack: React.FC<IStack> = ({ title, color = "grey" }) => {
  const colors = [
    "bg-red-500, bg-green-500, bg-black, bg-yellow-500",
    "bg-blue-500",
    "bg-white",
    "bg-purple-500",
  ];
  const backgroundColor = colors.find((item) => item.indexOf(color.toLowerCase()) >= 0);
  return <div className={`${backgroundColor} px-2 text-center rounded-xl`}>{title}</div>;
};

export default Stack;
