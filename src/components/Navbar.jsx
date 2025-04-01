import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavData from "../data/NavData.json"; // आपका JSON Data
const menus = NavData.menus
console.log(menus)

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-6 p-4 font-bold">
        {Object.keys(NavData.menus).map((item, i) => (
          <li
            key={i}
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveMenu(item)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* Main Menu Link */}
            <NavLink to={`/${item.toLowerCase()}`} className="ml-6 uppercase">
              <p>
                {item}
                <sup className="text-red-500 ml-1">
                  {NavData.menus[item][0]?.sup}
                </sup>
              </p>
            </NavLink>

            {/* Submenu (Hover करने पर दिखेगा) */}
            {activeMenu === item && (
              <div className="absolute top-8 left-0 bg-white shadow-lg p-4 w-64 grid grid-cols-1 gap-2">
                {NavData.menus[item].map((subItem, index) => (
                  <div key={index}>
                    <h3 className="text-red-500 font-semibold">{subItem.category}</h3>
                    <ul className="text-sm">
                      {subItem.items.map((menuItem, i) => (
                        <li key={i} className="hover:text-gray-700 cursor-pointer">
                          <NavLink to={`/${item.toLowerCase()}/${menuItem.toLowerCase().replace(/\s+/g, "-")}`}>
                            {menuItem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
