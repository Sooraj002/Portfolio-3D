import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const Right = styled.div`
  flex: 3;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const WhatWeDo = styled.h3`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.p`
  color: #da4ea2;
`;
const Desc = styled.p``;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
`;
const Img = styled.img`
  /* width: 800px;
  height: 600px;
  object-fit: contain; */
  animation: animate 2s infinite alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    };
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            Think. Make. <br /> Solve.
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" alt="img" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We Enjoy creating delightful,
            <br /> human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d Model */}
          <Img src="./img/moon.png" alt="img" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
