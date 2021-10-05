import React from "react";

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

export function LoginForm() {
  return (
    <FormContainer>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <Button borderColor="#FFCA00" colorText="#FFCA00" text="Login" />
    </FormContainer>
  );
}
