import React from "react";

import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Container } from "./styles";

function Footer() {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <a
              href="https://github.com/liviabelirocha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="http://shorturl.at/jGMR0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="http://shorturl.at/wWY17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Footer;
