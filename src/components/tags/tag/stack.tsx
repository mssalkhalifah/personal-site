export interface IStack {
  title?: string;
  color?: string;
}

const Stack: React.FC<IStack> = ({ title, color = "grey" }) => {
  return (
    <div className="bg-zinc-50 px-2 text-center rounded-xl shadow-md dark:bg-zinc-600">
      {title}
    </div>
  );
};

export default Stack;
