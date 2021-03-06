import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade>
        <div className="font-righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The venue 2021 all rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
