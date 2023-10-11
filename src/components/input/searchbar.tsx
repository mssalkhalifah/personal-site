"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export interface SearchBar {
  tags?: string[];
  onSearch: (query: string) => void;
  onTagSelect: (tags: string[]) => void;
}

const SearchBar: React.FC<SearchBar> = ({ tags, onSearch, onTagSelect }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownClicked, setDropdownClick] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  useOutsideClick(dropdownRef, () => setDropdownClick(false));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex h-8 w-full rounded-full shadow-md">
      <div
        ref={dropdownRef}
        onClick={() => setDropdownClick(!dropdownClicked)}
        className={`relative flex justify-center items-center px-2 bg-third rounded-l-full cursor-pointer transition-colors space-x-1 border-2 ${
          dropdownClicked ? "border-blue-500" : "border-third"
        }`}
      >
        <p className="pointer-events-none select-none opacity-60">Tags</p>
        <BiSolidUpArrow
          className={`transition-transform ${
            dropdownClicked ? "rotate-180" : "rotate-0"
          }`}
        />
        <AnimatePresence>
          {dropdownClicked && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.2 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.2 }}
              className="absolute bg-third w-fit z-50 top-10 left-0 rounded-lg p-2 space-y-1 shadow-lg"
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
                          onTagSelect([...selectedTags, insertTag]);
                        }
                      }}
                      className="px-1 text-lg w-full cursor-pointer hover:bg-primary hover:rounded-lg"
                    >
                      {tag}
                    </div>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`flex w-full items-center bg-white rounded-r-full overflow-hidden border-2 transition-colors ${
          isInputFocused ? "border-blue-500" : "border-white"
        }`}
      >
        <AnimatePresence>
          {selectedTags.map((tag) => {
            return (
              <motion.div
                key={tag}
                className="flex items-center bg-gray-500 rounded-full px-2 mx-1 w-fit space-x-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  ease: "linear",
                  layout: {
                    type: "tween",
                    ease: "easeOut",
                  },
                }}
                layout
              >
                {tag}
                <RxCross2
                  onClick={() => {
                    const tagIndex = selectedTags.indexOf(tag);
                    const newTags = selectedTags.filter(
                      (_, index) => index !== tagIndex,
                    );
                    setSelectedTags(newTags);
                    onTagSelect(newTags);
                  }}
                  className="cursor-pointer"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <input
          className="w-full h-full text-fourth outline-none mx-1"
          inputMode="search"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
