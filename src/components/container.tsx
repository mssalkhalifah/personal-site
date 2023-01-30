interface ContainerProps {
  title?: string;
  content?: string;
  className?: string;
}

export default function Container({
  title,
  content,
  className,
}: ContainerProps) {
  return (
    <div
      className={`flex flex-col p-2 rounded-lg shadow-md bg-white ${className}`}
    >
      <h1 className="font-bold underline decoration-2 text-2xl">{title}</h1>
      <p className="indent-4">{content}</p>
    </div>
  );
}
