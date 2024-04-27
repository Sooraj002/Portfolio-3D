import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icon = styled.img`
  cursor: pointer;
  height: 50px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="img" />
          {/* <Logo>Sooraj Nambiar</Logo> */}
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contacts</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" alt="search" />
          {/* <Icon scr="./img/search.png" /> */}
          <Button>Search</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
