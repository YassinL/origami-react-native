import React, { useState } from "react";

import styled from "styled-components/native";
import { LoginForm } from "../components/organisms/LoginForm";

const LoginScreenContainer = styled.SafeAreaView`
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

const LinkRegister = styled.Text`
  margin: 3%;
  color: #ffca00;
  font-weight: bold;
`;

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginScreenContainer>
      <ImageContainer>
        <LogoImage source={require("../assets/origami-logo-grey.png")} />
      </ImageContainer>
      <FormContainer>
        <LoginForm />
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
