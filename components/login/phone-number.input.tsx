import { View, Text, TextInput } from "react-native"; 
import { commonStyles } from "@/styles/common.styles";
import { windowHeight, windowWidth } from "@/themes/app.constant"; 
import { external } from "@/styles/external.style"; 
import styles from "@/screens/login/styles"; 
import color from "@/themes/app.colors";
import SelectInput from "../common/select-input"; 
import { useState } from "react"; 
import { countryItems } from "@/configs/country-list"; 



// Définition de l'interface pour les propriétés que le composant attend
interface Props {
  width?: number; // Largeur optionnelle pour le champ de numéro de téléphone
  phone_number: string; // Numéro de téléphone actuel
  setphone_number: (phone_number: string) => void; // Fonction pour mettre à jour le numéro de téléphone
  countryCode: string; // Code du pays sélectionné
  setCountryCode: (countryCode: string) => void; // Fonction pour mettre à jour le code du pays
}

export default function PhoneNumberInput({
  width, // Largeur du champ de saisie
  phone_number, // Numéro de téléphone à afficher
  setphone_number, // Fonction pour gérer les changements de numéro de téléphone
  countryCode, // Code du pays à afficher
  setCountryCode, // Fonction pour gérer les changements de code de pays
}: Props) {
  return (
    <View>
      {/* Titre "Phone Number" avec des marges en haut */}
      <Text
        style={[commonStyles.mediumTextBlack, { marginTop: windowHeight(8) }]}
      >
        Phone Number
      </Text>
      {/* Conteneur principal pour le champ de sélection de pays et l'entrée de numéro de téléphone */}
      <View
        style={[
          external.fd_row, // Style pour afficher les éléments en ligne
          external.ai_center, // Alignement des éléments au centre
          external.mt_5, // Marge supérieure de 5 unités
          { flexDirection: "row" }, // Redéfinir explicitement la direction en ligne
        ]}
      >
        {/* Conteneur pour le code de pays avec bordure personnalisée */}
        <View
          style={[
            styles.countryCodeContainer, 
            {
              borderColor: color.border, // Couleur de la bordure
            },
          ]}
        >
          {/* Composant SelectInput pour choisir le code du pays */}
          <SelectInput
            title="+880" // Titre par défaut du champ
            placeholder="Select your country" // Texte d'indication
            value={countryCode} // Valeur actuelle du code de pays
            onValueChange={(text) => setCountryCode(text)} // Gère les changements de valeur
            showWarning={false} // Désactive l'affichage des avertissements
            warning={"Please choose your country code!"} // Message d'avertissement personnalisé
            items={countryItems} // Liste des pays pour le sélecteur
          />
        </View>
        {/* Champ d'entrée pour le numéro de téléphone avec personnalisation */}
        <View
          style={[
            styles.phoneNumberInput, // Style spécifique au champ du numéro
            {
              width: width || windowWidth(346), // Largeur personnalisée ou valeur par défaut
              borderColor: color.border, // Couleur de la bordure
            },
          ]}
        >
          {/* Champ TextInput pour saisir le numéro de téléphone */}
          <TextInput
            style={[commonStyles.regularText]} // Style du texte
            placeholderTextColor={color.subtitle} // Couleur du texte de l'indication
            placeholder={"Enter your number"} // Texte d'indication
            keyboardType="numeric" // Type de clavier numérique
            value={phone_number} // Valeur actuelle du numéro de téléphone
            onChangeText={setphone_number} // Fonction pour gérer les changements de numéro
            maxLength={10} // Limite de longueur à 10 chiffres
          />
        </View>
      </View>
    </View>
  );
}
