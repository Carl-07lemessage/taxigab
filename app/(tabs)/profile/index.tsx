// Importation des composants de React Native
import { View, Text } from "react-native";
import React from "react";
// Importation des constantes de l'application (tailles de police, dimensions de l'écran)
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
// Importation de composants personnalisés (champs de saisie et boutons)
import Input from "@/components/common/input";
import SelectInput from "@/components/common/select-input";
import Button from "@/components/common/button";
// Importation du stockage asynchrone pour gérer les données locales
import AsyncStorage from "@react-native-async-storage/async-storage";
// Importation du routeur pour la navigation
import { router } from "expo-router";
// Importation du hook pour obtenir les données de l'utilisateur
import { useGetUserData } from "@/hooks/useGetUserData";

export default function Profile() {
  // Appel du hook pour récupérer les données de l'utilisateur et vérifier si elles sont en cours de chargement
  const { user, loading } = useGetUserData();

  // Si les données sont en cours de chargement, ne rien afficher pour le moment
  if (loading) {
    return;
  }

  // Affiche les données utilisateur dans la console (facultatif, pour déboguer)
  console.log(user);

  return (
    // Vue principale avec un espace de remplissage en haut
    <View style={{ paddingTop: 70 }}>
      {/* Titre de l'écran de profil */}
      <Text
        style={{
          textAlign: "center",
          fontSize: fontSizes.FONT30,
          fontWeight: "600",
        }}
      >
        My Profile
      </Text>

      {/* Conteneur principal des champs de saisie */}
      <View style={{ padding: windowWidth(20) }}>
        {/* Champ de saisie pour le nom de l'utilisateur */}
        <Input
          title="Name"
          value={user?.name} // Affiche la valeur actuelle du nom de l'utilisateur
          onChangeText={() => console.log("")} // Pas de fonction de modification ici
          placeholder={user?.name!} // Affiche le nom de l'utilisateur comme placeholder
        />
        {/* Champ de saisie pour l'adresse email (désactivé) */}
        <Input
          title="Email Address"
          value={user?.email} // Affiche l'email de l'utilisateur
          onChangeText={() => console.log("")} // Pas de fonction de modification ici
          placeholder={user?.email!} // Affiche l'email de l'utilisateur comme placeholder
          disabled={true} // Désactive le champ car l'email ne doit pas être modifiable
        />
        {/* Champ de saisie pour le numéro de téléphone (désactivé) */}
        <Input
          title="Phone Number"
          value={user?.phone_number} // Affiche le numéro de téléphone de l'utilisateur
          onChangeText={() => console.log("")} // Pas de fonction de modification ici
          placeholder={user?.phone_number!} // Affiche le numéro de téléphone comme placeholder
          disabled={true} // Désactive le champ car le numéro de téléphone ne doit pas être modifiable
        />

        {/* Bouton de déconnexion avec un espacement vertical */}
        <View style={{ marginVertical: 25 }}>
          <Button
            // Fonction déclenchée lors de l'appui sur le bouton de déconnexion
            onPress={async () => {
              // Supprime le jeton d'accès du stockage asynchrone pour déconnecter l'utilisateur
              await AsyncStorage.removeItem("accessToken");
              // Redirige l'utilisateur vers l'écran de connexion
              router.push("/(routes)/login");
            }}
            title="Log Out" // Texte du bouton
            backgroundColor="crimson" // Couleur de fond du bouton
          />
        </View>
      </View>
    </View>
  );
}
