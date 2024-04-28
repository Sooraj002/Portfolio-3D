import React from "react";
import styled from "styled-components";
import Cube from "./Cube";
import {
  OrbitControls,
  Text,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// Styled Components

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const WhatWeDo = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.p`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;

const Button = styled.button`
  width: 120px;
  padding: 10px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
`;

// Component

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          {" "}
          <Canvas camera={{ fov: 25, position: [4, 4, 4] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" alt="img" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            A creative group of designers and developers with a passion and art.
          </Desc>
          <Button>See our Works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
