import { ReactElement } from "react";
import styled from "styled-components/native";

const StatCircle = styled.View<{ bg?: string }>`
  background: ${({ bg }) => bg || "#353334"};
  height: 150px;
  width: 150px;
  border-radius: 75px;
  align-items: center;
  margin-bottom: 25px;
  justify-content: center;
`;
const StatValue = styled.Text`
  font-size: 25px;
  margin-vertical: 7px;
  font-weight: 500;
`;
const StatName = styled.Text`
  font-size: 15px;
`;

type circleStatProps = {
  bg?: string;
  value: string;
  name: string;
  icon: ReactElement;
};
export default function CircleStat({ icon, name, value, bg }: circleStatProps) {
  return (
    <StatCircle bg={bg}>
      {icon}
      <StatValue>{value}</StatValue>
      <StatName>{name}</StatName>
    </StatCircle>
  );
}
