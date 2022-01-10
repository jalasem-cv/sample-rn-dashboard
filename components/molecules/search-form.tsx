import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #353334;
  margin-horizontal: 20px;
  border-radius: 15px;
  padding-horizontal: 10px;
  margin-bottom: 35px;
`;
const SearchField = styled.TextInput`
  flex: 1;
  border: none;
  background: transparent;
  padding: 15px 10px;
  color: white;
  }
`;

export default function SearchForm() {
  return (
    <SearchContainer>
      <Feather name="search" size={24} color="#6a6a6a" />
      <SearchField placeholder="Search" placeholderTextColor="#6a6a6a" />
    </SearchContainer>
  );
}
