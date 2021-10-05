import axios from "axios";
import React, { useState } from "react";

import styled from "styled-components";
import { Button } from "../atom/Button";
import { CustomInput } from "../atom/CustomInput";

const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: #fafafa;
  margin: 0 7%;
  border-radius: 12;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.75);
`;

export function RegisterForm() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (value) => {
    setData(() => ({
      ...data,
      data: value,
    }));
  };
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [error, setError] = useState(null);
  //   const [fieldError, setFieldError] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("SUBMIT");

    try {
      const result = await axios.post(`https://api.pote.dev/users`, data);
      if (result.status === 201) {
        // setRedirect(true);
        console.log("INSCRIT");
      }
    } catch (err) {
      console.warning("err", err);
    }
  };

  return (
    <FormContainer>
      <CustomInput placeholder="First name" onChangeText={handleChange} />
      <CustomInput placeholder="Last name" onChangeText={handleChange} />
      <CustomInput
        placeholder="Password"
        onChangeText={handleChange}
        secureTextEntry={true}
      />
      <CustomInput placeholder="username" onChangeText={handleChange} />
      <CustomInput placeholder="Email" onChangeText={handleChange} />
      <Button
        borderColor="#FFCA00"
        colorText="#FFCA00"
        text="Register"
        onSubmitEditing={handleSubmit}
      />
    </FormContainer>
  );
}
