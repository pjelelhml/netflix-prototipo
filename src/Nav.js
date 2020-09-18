import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Videoflix Logo"
      />

      <img
        className="nav_avatar"
        src="data:image/png;base64,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"
        alt="Videoflix Perfil"
      />
    </div>
  );
}

export default Nav;
