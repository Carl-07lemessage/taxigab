// Importation d'AsyncStorage pour stocker et récupérer les données de manière asynchrone
import AsyncStorage from "@react-native-async-storage/async-storage";
// Importation de la fonction Redirect d'Expo Router pour rediriger les utilisateurs
import { Redirect } from "expo-router";
// Importation des hooks de React pour gérer les effets secondaires et les états
import { useEffect, useState } from "react";

export default function Index() {
  // État pour déterminer si l'utilisateur est connecté
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // État pour indiquer si les données sont en cours de chargement
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    // Flag pour vérifier si le composant est monté
    let isMounted = true;

    // Fonction asynchrone pour récupérer les données de connexion (jeton d'accès) depuis AsyncStorage
    const getData = async () => {
      try {
        // Récupère le jeton d'accès depuis AsyncStorage
        const accessToken = await AsyncStorage.getItem("accessToken");
        // Si le composant est monté, met à jour l'état de connexion en fonction de la présence du jeton
        if (isMounted) {
          setisLoggedIn(!!accessToken); // Si accessToken existe, isLoggedIn devient true
        }
      } catch (error) {
        // Affiche une erreur dans la console en cas de problème de récupération des données
        console.log("Failed to retrieve access token from async storage", error);
      } finally {
        // Si le composant est toujours monté, indique que le chargement est terminé
        if (isMounted) {
          setisLoading(false);
        }
      }
    };

    // Appelle la fonction de récupération des données
    getData();

    // Fonction de nettoyage pour indiquer que le composant est démonté
    return () => {
      isMounted = false;
    };
  }, []);

  // Si les données sont encore en cours de chargement, retourne null pour afficher un écran vide
  if (isLoading) {
    return null;
  }

  // Redirige l'utilisateur vers la page d'onboarding s'il n'est pas connecté, ou vers la page d'accueil s'il l'est
  return (
    <Redirect href={!isLoggedIn ? "/(routes)/onboarding" : "/(tabs)/home"} />
  );
}
