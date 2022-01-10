import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-horizontal: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export default function BottomNav() {
  return (
    <Container>
      <AntDesign name="home" size={24} color="#f6f6f6" />
      <AntDesign name="wallet" size={24} color="#8b8b8b" />
      <AntDesign name="barschart" size={24} color="#8b8b8b" />
      <AntDesign name="user" size={24} color="#8b8b8b" />
    </Container>
  );
}
