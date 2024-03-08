import { Tooltip } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
export const HomeRedirect: React.FC = () => {
  return (
    <Tooltip content="Go back to home" placement="left">
      <NavLink
        to="/"
        className="fixed bottom-4 right-4 bg-[#F9F9FB] text-black border border-slate-900 p-3 rounded-full shadow-md "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </NavLink>
    </Tooltip>
  );
};
