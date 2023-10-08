import React from "react";

function Navbar() {
  return (
    <div className="Nav-con">
      <h1 className="page-name">
        <span>Eat</span>pizza
      </h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallary</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar