import React, { useContext, useState } from "react";

import styled from "styled-components";
import { Button as CustomeButton } from "../atom/Button";
import { CustomInput } from "../atom/CustomInput";
import api from "../../utils/api";
import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";

const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 5%;
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

export function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(null);
      setIsLoading(false);

      const body = {
        email,
        password,
      };
      console.log("Body", body);
      const result = await api.post(`/auth/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        console.log("Connecter !!", result.data);

        navigation.navigate("MainScreen");
        return dispatch({ type: "SIGNIN", payload: result });
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
          <TitleText>Login Here !</TitleText>
        </TitleContainer>
        <CustomInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
          error={error}
        />
        <CustomInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1 }}
          error={error}
        />
        <CustomeButton
          borderColor="#FFCA00"
          colorText="#FFCA00"
          text="Login"
          onPress={handleSubmit}
        />
      </FormContainer>
    </>
  );
}
