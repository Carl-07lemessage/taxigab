import { View, Text } from "react-native";
import React from "react"; // Importation de React pour l'utilisation des composants fonctionnels
import { commonStyles } from "@/styles/common.style"; // Importation des styles communs partagés
import { external } from "@/styles/external.style"; // Importation des styles externes

// Définition du composant fonctionnel SignInText
export default function SignInText({
  title, // Titre optionnel passé en tant que propriété
  subtitle, // Sous-titre optionnel passé en tant que propriété
}: {
  title?: string; // Le titre peut être une chaîne de caractères ou indéfini
  subtitle?: string; // Le sous-titre peut être une chaîne de caractères ou indéfini
}) {
  return (
    <>
      {/* Affichage du titre */}
      <Text
        style={[
          commonStyles.regularTextBigBlack, // Style pour le texte principal
          { color: "#000" }, // Couleur du texte noir
          { textAlign: "left" }, // Alignement du texte à gauche
          { marginTop: 20 }, // Marge supérieure de 20 unités
        ]}
      >
        {/* Si un titre est fourni, l'afficher, sinon afficher le texte par défaut */}
        {title ? title : "Join to take your ride 😃"}
      </Text>
      {/* Affichage du sous-titre */}
      <Text
        style={[
          commonStyles.regularText, // Style pour le texte secondaire
          external.pt_4, // Style de padding supérieur défini dans les styles externes
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
