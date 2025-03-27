import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-pink-600">Myntra</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Men", "Women", "Kids", "Home", "Beauty", "GENZ", "Studio"].map(
              (item, index) => (
                <a key={index} href="#" className="text-gray-700 hover:text-pink-600">
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          {["Men", "Women", "Kids", "Home", "Beauty", "GENZ", "Studio"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-pink-100"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
