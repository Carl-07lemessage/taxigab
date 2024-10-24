// Importation des composants de React Native
import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
// Importation des styles spécifiques à l'écran
import styles from "@/screens/home/styles";
// Importation des couleurs de thème de l'application
import color from "@/themes/app.colors";
// Importation du composant RideCard pour afficher chaque trajet
import RideCard from "@/components/ride/ride.card";
// Importation du stockage asynchrone pour gérer les données locales
import AsyncStorage from "@react-native-async-storage/async-storage";
// Importation de la bibliothèque axios pour les requêtes HTTP
import axios from "axios";
// Importation des constantes d'application, comme la hauteur de l'écran
import { windowHeight } from "@/themes/app.constant";

// Composant principal pour l'historique des trajets
export default function History() {
  // Déclaration d'un état local pour stocker les trajets récents
  const [recentRides, setrecentRides] = useState([]);

  // Fonction asynchrone pour récupérer les trajets récents de l'utilisateur
  const getRecentRides = async () => {
    // Récupère le jeton d'accès depuis le stockage asynchrone
    const accessToken = await AsyncStorage.getItem("accessToken");
    // Effectue une requête GET pour récupérer les trajets depuis l'API
    const res = await axios.get(
      `${process.env.EXPO_PUBLIC_SERVER_URI}/get-rides`,
      {
        headers: {
          // Envoie le jeton d'accès dans l'en-tête Authorization
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // Met à jour l'état des trajets récents avec les données reçues
    setrecentRides(res.data.rides);
  };

  // Utilise useEffect pour appeler la fonction de récupération des trajets au chargement du composant
  useEffect(() => {
    getRecentRides();
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'au montage

  return (
    // Conteneur principal pour la section de l'historique des trajets
    <View
      style={[
        styles.rideContainer,
        { backgroundColor: color.lightGray, paddingTop: windowHeight(40) },
      ]}
    >
      {/* Titre de la section "Ride History" */}
      <Text
        style={[
          styles.rideTitle,
          { color: color.primaryText, fontWeight: "600" },
        ]}
      >
        Ride History
      </Text>

      {/* Défilement vertical pour afficher la liste des trajets récents */}
      <ScrollView>
        {/* Boucle pour afficher chaque trajet sous forme de carte */}
        {recentRides?.map((item: any, index: number) => (
          // Composant RideCard pour chaque trajet, avec un identifiant unique basé sur l'index
          <RideCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
