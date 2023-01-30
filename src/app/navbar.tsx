"use client";

export default function Navbar() {
  return (
    <div className="flex w-full bg-blue-300 p-2">
      <button
        className="p-2 bg-white rounded-md"
        onClick={() => console.log("Hello")}
      >
        Hello
      </button>
    </div>
  );
}
