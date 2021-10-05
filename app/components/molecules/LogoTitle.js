import React from "react";
import { Image } from "react-native";

export function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 40 }}
      source={require("../../assets/origami-logo-white.png")}
    />
  );
}
