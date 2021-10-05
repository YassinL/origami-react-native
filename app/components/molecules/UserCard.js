import React from "react";

import styled from "styled-components/native";

const UserCardContainer = styled.View`
  height: 80px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
`;

const UserImageContainer = styled.View`
  margin: 5px 15px;
  height: 70px;
  width: 65px;
  border-radius: 15px;
`;

const UserImage = styled.Image`
  height: 100%;
  width: auto;
  resize-mode: center;
  border-radius: 15px;
`;

const InformationContainer = styled.View``;

const InformationDetails = styled.Text`
  color: #656565;
  margin: 5px 0;
`;

export function UserCard({ email, firstName, lastName }) {
  return (
    <UserCardContainer>
      <UserImageContainer>
        <UserImage source={require("../../assets/profil.png")} />
      </UserImageContainer>
      <InformationContainer>
        <InformationDetails>{firstName}</InformationDetails>
        <InformationDetails>{lastName}</InformationDetails>
        <InformationDetails>{email}</InformationDetails>
      </InformationContainer>
    </UserCardContainer>
  );
}
