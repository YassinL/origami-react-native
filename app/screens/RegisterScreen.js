import React from "react";

import styled from "styled-components/native";
import { RegisterForm } from "../components/organisms/RegisterForm";
import { Feather } from "@expo/vector-icons";

const RegisterScreenContainer = styled.SafeAreaView`
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
  margin: 5% 5% 1% 5%;
`;

const LogoImage = styled.Image`
  height: 100%;
  width: auto;
`;

const FormContainer = styled.View`
  width: 100%;
`;

const ArrowContainer = styled.View`
  position: absolute;
  left: 5px;
  top: 40px;
`;

export function RegisterScreen({ navigation }) {
  return (
    <RegisterScreenContainer>
      <ArrowContainer>
        <Feather
          name="chevron-left"
          color="#ffca00"
          size={30}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </ArrowContainer>
      <ImageContainer>
        <LogoImage source={require("../assets/origami-logo-grey.png")} />
      </ImageContainer>
      <FormContainer>
        <RegisterForm navigation={navigation} />
      </FormContainer>
    </RegisterScreenContainer>
  );
}
