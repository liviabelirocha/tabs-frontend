import React from "react";

import { Container, Content, Wrapper } from "./styles";

import GearInfo from "../../components/GearInfo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import sts002 from "../../assets/sts002.jpg";
import eac50 from "../../assets/eac50.jpg";
import clb24 from "../../assets/clb24.jpg";
import strikeg30 from "../../assets/strikeg30.jpg";

function Gear() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <center>GEAR</center>
        <Content>
          <GearInfo img={sts002} title="Eagle STS 002" type="Guitar" />
          <GearInfo img={eac50} title="Earth EAC 50" type="Guitar" />
          <GearInfo img={clb24} title="Strinberg CLB-24 Passive" type="Bass" />
          <GearInfo img={strikeg30} title="Borne Strike G30" type="Amplifier" />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default Gear;
