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
      className={`flex flex-col rounded-lg bg-white p-2 shadow-md ${className}`}
    >
      <h1 className="text-2xl font-bold underline decoration-2">{title}</h1>
      <p className="indent-4">{content}</p>
    </div>
  );
}
