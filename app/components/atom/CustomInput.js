import React from "react";

import styled from "styled-components";

const InputContainer = styled.View`
  width: 90%;
`;

const Label = styled.Text``;

const Input = styled.TextInput`
  margin: 4% 0;
  padding: 10px 5px;
`;

const TextError = styled.Text``;

export function CustomInput({
  label,
  error,
  placeholder,
  onChangeText,
  secureTextEntry,
  style,
}) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={style}
        clearButtonMode="while-editing"
      />
      <TextError>{error && error.message}</TextError>
    </InputContainer>
  );
}
