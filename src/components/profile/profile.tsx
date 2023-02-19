import Name from "./name";

export default function Profile() {
  return (
    <div className="pointer-events-auto flex flex-col place-items-center text-white md:flex-row">
      <Name />
    </div>
  );
}
