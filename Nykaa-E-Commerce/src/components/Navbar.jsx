import { Avatar, Badge } from "@material-ui/core";
import {ListOutlined, Search, ShoppingCartOutlined, HomeOutlined, PersonAdd, } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./search";
import Man from "./Images/person.jpeg";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
text-transform: uppercase;
background-image: linear-gradient(
  -45deg,
  #ff1361 0%, #44107a 29%, #44107a 67%, #ff1361 100%);
background-size: auto auto;
background-clip: border-box;
background-size: 100% 100%;
color: #000;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline-block;
font-size: 40px;
}
${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight:bolder;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  transition: transform .2s;
  &:hover{
    transform: scale(1.1);
    
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ListOutlined style={{ paddingRight: 23,textDecoration: 'none',color:"#44107a"}}><NavLink to='/Sidebar'/></ListOutlined>
          <Language>EN</Language>
          <SearchContainer>
           <SearchBar />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>NYKAA.</Logo>
        </Center>
        <Right>
          <NavLink to='/'><HomeOutlined style={{ color: "#44107a", fontSize: 30 }} /></NavLink>
          <NavLink to='/Register'style={{ textDecoration: 'none'}}><MenuItem><PersonAdd/></MenuItem></NavLink>
          <NavLink to='/Cart'>
            <MenuItem>
            <Badge badgeContent={2} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem></NavLink>
          <NavLink to='/Login'style={{ textDecoration: 'none'}}><MenuItem><Avatar src={Man} style={{ height:"35px",width:"35px" }}/></MenuItem></NavLink>
        </Right>
      </Wrapper>
    </Container>
    
  );
};


export default Navbar;

