import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from"./WebDesign"
import Development from"./Development"
import ProductDesign from"./ProductDesign"

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 75px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: 1s;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    -webkit-text-stroke: 2px white;
    /* left: 0; */
    color: pink;
  }

  &:hover {
    color: pink;
    -webkit-text-stroke: 2px pink;
    animation: 1s moveText linear;
    @keyframes moveText {
    }
    ::after {
      color: rebeccapurple;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  scale: 0.9;
`;
const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} $text={item} onClick={()=>{setWork(item)}}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
