export interface IContainer {
  id?: string;
  children?: React.ReactNode;
  altBackgroundColour?: boolean;
}

const Container: React.FC<IContainer> = ({
  id,
  children,
  altBackgroundColour = false,
}) => {
  const backgroundColour = altBackgroundColour ? "bg-zinc-900" : "";

  return (
    <section
      id={id}
      className={`relative flex h-full w-full justify-center justify-items-center ${backgroundColour} `}
    >
      <div className="flex h-full w-[1920px]">{children}</div>
    </section>
  );
};

export default Container;
