import React, { useState } from "react";

import { Container, StyledLink, Bars } from "./styles";

import logo from "../../assets/logo2.png";

import Search from "../Search";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Bars onClick={() => setActive(!active)} active={active} />
      <Container active={active}>
        <ul>
          <li>
            <StyledLink to="/">
              <img src={logo} alt="wheat tabs" />
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">TABS</StyledLink>
          </li>
          <li>
            <StyledLink to="/gear">GEAR</StyledLink>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
