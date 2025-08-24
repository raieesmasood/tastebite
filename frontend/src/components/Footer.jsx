import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Taste Bite</div>
          <div className="right">
            <p>Dr. Ali-Jan Road, Srinagar</p>
            <p>Open: 8:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By RM</p>
          </div>
          <div className="right">
             <p>© {new Date().getFullYear()} All Rights Reserved By Raiees</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;