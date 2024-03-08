import { Search } from "@/components/search";
import { OnSearchChange } from "@/types";
import menuIcon from "@/assets/svgs/menuIcon.svg";
import searchIcon from "@/assets/svgs/searchIcon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const TopBar: React.FC<{ onSearchChange: OnSearchChange }> = ({
  onSearchChange,
}) => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  return (
    <nav className="top-bar p-3">
      <div className="flex gap-4 h-10 justify-between items-center">
        <svg className="w-6 h-6 text-black">
          <use href={`${menuIcon}#menuIcon`} />
        </svg>
        <div className="flex  items-center gap-5">
          <AnimatePresence mode="wait">
            {!isSearchActive && (
              <motion.div
                className="md:w-[250px] w-[230px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
              >
                <Search onSearchChange={onSearchChange} />
              </motion.div>
            )}
          </AnimatePresence>

          <svg
            className="w-6 h-6 text-black relative top-[1px]"
            onClick={() => setIsSearchActive(!isSearchActive)}
          >
            <use href={`${searchIcon}#searchIcon`} />
          </svg>
        </div>
      </div>
    </nav>
  );
};
