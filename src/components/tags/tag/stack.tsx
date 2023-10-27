export interface IStack {
  title?: string;
  color?: string;
}

const Stack: React.FC<IStack> = ({ title, color = "grey" }) => {
  return (
    <div className="bg-zinc-50 px-2 text-center rounded-xl shadow-md dark:shadow-zinc-700 dark:bg-zinc-700">
      {title}
    </div>
  );
};

export default Stack;
