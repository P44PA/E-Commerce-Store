import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchInput}`);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearchSubmit} className={`absolute right-0 ${isSearchOpen ? "" : "hidden"}`}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="border rounded-sm p-1"
          placeholder="Search products..."
          autoFocus
        />
      </form>
      <BiSearch onClick={handleSearchIconClick} className="cursor-pointer text-3xl" />
    </div>
  );
};

export default SearchComponent;
