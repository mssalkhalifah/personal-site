"use client";

import TypeIt from "typeit-react";

export default function Description() {
  return (
    <p className="invisible text-[0] lg:visible lg:mt-4 lg:text-3xl">
      <TypeIt
        options={{
          strings: [
            "A bachelor of computer science at Imam Mohammad Ibn Saud Islamic",
            "University with first-class honor. A Saudi. And like developing video",
            "games and web apps as a hobby.",
          ],
          speed: 5,
        }}
      ></TypeIt>
    </p>
  );
}
