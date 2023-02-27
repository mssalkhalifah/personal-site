export interface ITag {
  title?: string;
  color?: number;
}

const Tag: React.FC<ITag> = ({ title, color }) => {
  const colors = ["bg-red-200", "bg-blue-200", "bg-yellow-200"];
  return (
    <div
      className={`mr-2 rounded-lg ${
        colors[color || 0]
      } py-1 px-2 text-center shadow-md`}
    >
      <p>{title}</p>
    </div>
  );
};

export default Tag;
