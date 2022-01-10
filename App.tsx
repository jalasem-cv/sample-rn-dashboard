import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import {
  MaterialIcons,
  Octicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { Platform, StatusBar } from "react-native";
import CircleStat from "./components/atoms/circle-stat";
import SearchForm from "./components/molecules/search-form";
import BottomNav from "./components/organism/bottom-nav";

const Container = styled.SafeAreaView`
  flex: 1;
  background: #2a2a2a;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight || 0 + 10
    : 0}px;
`;
const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding-top: 20px;
`;
const Title = styled.Text`
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const AvatarContainer = styled.View`
  padding: 5px;
  border-radius: 10px;
  border: solid 1px #a6a6a6;
`;
const Avatar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;
const Welcome = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
  margin-top: 40px;
  margin-bottom: 30px;
`;
const WelcomeText = styled.Text`
  color: #c5c5c5;
  margin-top: 5px;
`;
const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  flex-wrap: wrap;
`;
const View = styled.View``;

const stats = [
  {
    name: "Sales",
    icon: <FontAwesome5 name="percentage" size={20} color="black" />,
    value: "230k",
    bg: "#c0dedc",
  },
  {
    name: "Customers",
    icon: <FontAwesome5 name="user-circle" size={20} color="black" />,
    value: "8.549k",
    bg: "#e6dff1",
  },
  {
    name: "Products",
    icon: <Feather name="layout" size={20} color="black" />,
    value: "1.423k",
    bg: "#f1eee9",
  },
  {
    name: "Revenue",
    icon: <Feather name="pie-chart" size={20} color="black" />,
    value: "$9,745",
    bg: "#f1dfdf",
  },
];

export default function App() {
  return (
    <Container>
      <ExpoStatusBar style="light" />
      <Header>
        <MaterialIcons name="waves" size={24} color="white" />
        <AvatarContainer>
          <Avatar
            source={{
              uri: "https://lh3.google.com/u/0/ogw/ADea4I4h4Ratgb3PmQ7ChCHqPYBaC7VAPH3rPLOGHkTH=s32-c-mo",
            }}
          />
        </AvatarContainer>
      </Header>
      <Welcome>
        <View>
          <Title>Hello Jalasem</Title>
          <WelcomeText>Welcome Back!</WelcomeText>
        </View>

        <AvatarContainer>
          <Octicons name="settings" size={24} color="#e6e2e2" />
        </AvatarContainer>
      </Welcome>
      <SearchForm />
      <ScrollContainer>
        <Stats>
          {stats.map((stat, statIndex) => (
            <CircleStat {...stat} key={`stat_${statIndex}`} />
          ))}
        </Stats>
      </ScrollContainer>
      <BottomNav />
    </Container>
  );
}
