"use client";

interface NavButton {
  title?: string;
  className?: string;
}

function NavButton({ title, className }: NavButton) {
  return (
    <button className={`p-2 bg-white rounded-md w-24 ${className}`}>
      {title}
    </button>
  );
}

export default function Navbar() {
  return (
    <div className="flex w-full bg-blue-300 p-2 justify-between">
      <div>
        <NavButton title="Home" />
        <NavButton title="Projects" className="mx-4" />
        <NavButton title="Blogs" />
      </div>
      <div></div>
    </div>
  );
}
