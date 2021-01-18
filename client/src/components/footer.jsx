import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className=" font-small footerBg ">
        <Container>
          <h6 align="center" className="text-white">
            A Frontend Project By{" "}
            <a href="https://github.com/Ango-Jay">AngoJay</a>
          </h6>
          <h6 align="center" className="text-white">
            Enye ID: recuIVX5TLWrZiHZ1
          </h6>
          <h6 align="center" className="text-white">
            © 2021 Enye Cohort
          </h6>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
