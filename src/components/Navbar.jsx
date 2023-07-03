import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav>
      <NavLink to="/">
        <span> Mate's amazing &reg; </span>
        <h2>
          <BiCameraMovie />
          Movies List
        </h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
