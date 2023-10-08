import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-con">
        <div className="socials">
          <a href="">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <div className="footer-nav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallary</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy:2022 Designed by <span className="desgin">Tony</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer