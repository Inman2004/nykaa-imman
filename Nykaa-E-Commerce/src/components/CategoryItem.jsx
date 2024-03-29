import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: Transparent;
    color:white;
    cursor: pointer;
    font-weight: 600;
    transition : transform .2s;
    border :solid 2px white;
    border-radius:25px;
    &:hover{
      transform: scale(1.1);
      background-color: rgba(266,165,213,0.3);
    }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to='/Product'><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
