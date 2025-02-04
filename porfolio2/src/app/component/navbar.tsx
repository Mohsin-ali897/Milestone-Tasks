"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { headerItem } from "../constant/constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Mohsin Portfolio</h1>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Link to={headerItem.home.page} smooth={true} duration={500}>
              {headerItem.home.label}
            </Link>
          </li>
          <li>
            <Link to={headerItem.about.page} smooth={true} duration={500}>
              {headerItem.about.label}
            </Link>
          </li>
          <li>
            <Link to={headerItem.projects.page} smooth={true} duration={500}>
              {headerItem.projects.label}
            </Link>
          </li>
          <li>
            <Link to={headerItem.contact.page} smooth={true} duration={500}>
              {headerItem.contact.label}
            </Link>
          </li>
          <li>
            <Link to={headerItem.skills.page} smooth={true} duration={500}>
              {headerItem.skills.label}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="mobile-nav">
          <li>
            <Link
              to={headerItem.home.page}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={headerItem.about.page}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={headerItem.projects.page}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={headerItem.contact.page}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={headerItem.skills.page}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
