import React from "react";

import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  border: solid 1px ${(props) => props.borderColor};
  padding: 0 20px;
  height: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  color: ${(props) => props.colorText};
`;

export function Button({ onPress, borderColor, text, colorText }) {
  return (
    <ButtonContainer onPress={onPress} borderColor={borderColor}>
      <ButtonText colorText={colorText}>{text}</ButtonText>
    </ButtonContainer>
  );
}
