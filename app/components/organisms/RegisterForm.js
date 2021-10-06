import axios from "axios";
import React, { useState } from "react";
import api from "../../utils/api";
import { Button as CustomeButton } from "../atom/Button";

import styled from "styled-components";
// import { Button } from "../atom/Button";
import { CustomInput } from "../atom/CustomInput";
import { Text } from "react-native";

const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: #fafafa;
  margin: 0 9%;
  border-radius: 12px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.75);
`;

const TitleContainer = styled.View`
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #727272;
`;

export function RegisterForm({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  //   const [fieldError, setFieldError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(null);
      setIsLoading(false);

      const body = {
        firstname,
        lastname,
        password,
        username,
        email,
      };
      console.log("BODY", body);
      console.log("SUBMIT");
      const result = await api.post(`/users`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 201) {
        console.log("INSCRIT");
        navigation.navigate("LoginScreen");
      }
    } catch (err) {
      console.log("err", err);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      <FormContainer>
        <TitleContainer>
          <TitleText>Register Here !</TitleText>
        </TitleContainer>
        <CustomInput
          placeholder="First name"
          onChangeText={(text) => setFirstname(text)}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
        />
        <CustomInput
          placeholder="Last name"
          onChangeText={(text) => setLastname(text)}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
        />
        <CustomInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
        />
        <CustomInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
        />
        <CustomInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
        />
        <CustomeButton
          borderColor="#FFCA00"
          colorText="#FFCA00"
          text="Register"
          onPress={handleSubmit}
        />
        {/* <Button title="submit" onPress={handleSubmit} /> */}
      </FormContainer>
    </>
  );
}
