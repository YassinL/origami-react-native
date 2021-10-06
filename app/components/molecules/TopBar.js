import React from "react";

import styled from "styled-components/native";

import { Button } from "../atom/Button";

const CardContainer = styled.View`
  background-color: #fafafa;
  margin: 5%;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const TextUserName = styled.Text`
  color: #ffca00;
  font-weight: 600;
`;

export function TopBar() {
  return (
    <CardContainer>
      <TextContainer>
        <TextUserName>Yassin Leclercq</TextUserName>
      </TextContainer>
    </CardContainer>
  );
}
