import React from "react";

import styled from "styled-components/native";
import { RegisterForm } from "../components/organisms/RegisterForm";

const RegisterScreenContainer = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.View`
  height: 100px;
  width: 100px;
  display: flex;
  margin: 10% 5%;
`;

const LogoImage = styled.Image`
  height: 100%;
  width: auto;
`;

const FormContainer = styled.View`
  width: 100%;
`;

export function RegisterScreen() {
  return (
    <RegisterScreenContainer>
      <ImageContainer>
        <LogoImage source={require("../assets/origami-logo-grey.png")} />
      </ImageContainer>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </RegisterScreenContainer>
  );
}
