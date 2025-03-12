import React, { createContext, useContext, useState } from "react";
import taskify from "../assets/Taskify-logo.svg";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { useSelector } from "react-redux";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expand, setExpand] = useState(true);
  const { user } = useSelector((state) => state.auth);

  return (
    <aside className={`h-screen transition-all ${expand ? "w-64" : "w-16"}`}>
      <nav className="h-full flex flex-col border-r bg-white shadow-sm shadow-indigo-400">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={taskify}
            alt="Taskify"
            className={`transition-all duration-300 ${expand ? "w-32" : "w-0 opacity-0"}`}
          />
          <button
            className="p-1.5  bg-gray-50 hover:bg-gray-100 cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expand }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {user && (
          <div className="border-t flex items-center p-3 transition-all duration-300">
            <img
              src={user.image || "https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-md"
            />
            <div className={`overflow-hidden transition-all duration-300 ${expand ? "w-52 ml-3" : "w-0 opacity-0"}`}>
              <h4 className="font-semibold">{user.name || "Guest"}</h4>
              <span className="text-sm text-gray-600">{user.email || "No email"}</span>
            </div>
            <MoreVertical size={30} className={`${expand ? "ml-2" : "hidden"}`} />
          </div>
        )}
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, text, active, alert }) => {
  const { expand } = useContext(SidebarContext);

  return (
    <li
    className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
        ${!expand?"justify-center":""}
    `}
    >
      <div>
      {icon}
      </div>
      <span
        className={`transition-all duration-300 ${expand ? "opacity-100 w-auto ml-3" : "opacity-0 w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expand ? "" : "top-2"}`}></div>
      )}

      {!expand && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-3 bg-indigo-100 text-indigo-800 text-sm
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {text}
        </div>
      )}
    </li>
  );
};

export { Sidebar, SidebarItem };
