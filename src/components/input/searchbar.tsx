"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export interface SearchBar {
  tags?: string[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBar> = ({ tags, onSearch }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownClicked, setDropdownClick] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useOutsideClick(dropdownRef, () => setDropdownClick(false));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex h-8 w-full shadow-lg rounded-full">
      <div
        ref={dropdownRef}
        onClick={() => setDropdownClick(!dropdownClicked)}
        className={`relative flex justify-center items-center px-2 bg-third rounded-l-full cursor-pointer space-x-1 ${
          dropdownClicked ? "outline-2 outline-blue-500" : ""
        }`}
      >
        <p className="pointer-events-none select-none opacity-60">Tags</p>
        <BiSolidUpArrow
          className={`transition-transform ${
            dropdownClicked ? "rotate-180" : "rotate-0"
          }`}
        />
        <div
          className={`absolute bg-third w-fit z-10 top-10 left-0 rounded-lg p-2 space-y-1 shadow-lg animate-fadeInUp ${
            dropdownClicked && tags ? "block" : "hidden"
          }`}
        >
          {tags &&
            tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  onClick={(event) => {
                    const insertTag = (event.target as HTMLDivElement)
                      .textContent;
                    if (selectedTags.indexOf(tag) < 0 && insertTag) {
                      setSelectedTags([...selectedTags, insertTag]);
                    }
                  }}
                  className="px-1 text-lg w-full cursor-pointer hover:bg-primary hover:rounded-lg"
                >
                  {tag}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex w-full items-center bg-white rounded-r-full overflow-hidden">
        {selectedTags.map((tag, index) => {
          return (
            <div
              key={index}
              className="flex items-center bg-gray-500 rounded-full px-2 mx-1 w-fit space-x-1 animate-fadeInUp"
            >
              {tag}{" "}
              <RxCross2
                onClick={() => {
                  const tagIndex = selectedTags.indexOf(tag);
                  const newTags = selectedTags.filter(
                    (_, index) => index !== tagIndex,
                  );
                  setSelectedTags(newTags);
                }}
                className="cursor-pointer"
              />
            </div>
          );
        })}
        <input
          className="w-full h-full text-fourth outline-none mx-1"
          inputMode="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
