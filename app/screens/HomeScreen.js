import React from "react";

import styled from "styled-components/native";

// Components
import { TopBar } from "../components/molecules/TopBar";
import { UserCard } from "../components/molecules/UserCard";

const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

const ScrollViewItems = styled.ScrollView`
  margin-top: 2.5%;
  padding: 2.5% 5%;
`;

export function HomeScreen() {
  return (
    <Container>
      <TopBar />
      <ScrollViewItems>
        <UserCard
          email="yassin@hotmail.fr"
          firstName="Yassin"
          lastName="Leclercq"
        />
      </ScrollViewItems>
    </Container>
  );
}
