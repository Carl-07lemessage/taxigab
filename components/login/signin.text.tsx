import { View, Text } from "react-native";
import React from "react"; 
import { commonStyles } from "@/styles/common.styles";
import { external } from "@/styles/external.style"; 



export default function SignInText({
  title, 
  subtitle, 
}: {
  title?: string; 
  subtitle?: string; 
}) {
  return (
    <>
      <Text
        style={[
          commonStyles.regularTextBigBlack, 
          { color: "#000" },
          { textAlign: "left" }, 
          { marginTop: 20 }, 
        ]}
      >


        {title ? title : "Join to take your ride 😃"}
      </Text>
      <Text
        style={[
          commonStyles.regularText,
          external.pt_4,
          { textAlign: "left" }, // Alignement du texte à gauche
        ]}
      >
        {/* Si un sous-titre est fourni, l'afficher, sinon afficher le texte par défaut */}
        {subtitle
          ? subtitle
          : "Enter your phone number, get one otp and let's go 😍"}
      </Text>
    </>
  );
}
