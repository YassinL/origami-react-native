import React from "react";

import styled from "styled-components/native";
import { LoginForm } from "../components/organisms/LoginForm";

const LoginScreenContainer = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ebebeb;
`;

const ImageContainer = styled.View`
  height: 120px;
  width: 120px;
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

const LinkRegister = styled.Text`
  margin: 5%;
  color: #ffca00;
  font-weight: bold;
  text-decoration: underline #ffca00;
`;

export function LoginScreen({ navigation }) {
  return (
    <LoginScreenContainer>
      <ImageContainer>
        <LogoImage source={require("../assets/origami-logo-grey.png")} />
      </ImageContainer>
      <FormContainer>
        <LoginForm navigation={navigation} />
      </FormContainer>
      <LinkRegister
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
      >
        Go register first !{" "}
      </LinkRegister>
    </LoginScreenContainer>
  );
}
