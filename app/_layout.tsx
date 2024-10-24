// Importation du module SplashScreen d'Expo pour gérer l'écran de lancement de l'application
import * as SplashScreen from "expo-splash-screen";
// Importation des hooks de React pour gérer les effets secondaires et les états
import { useEffect, useState } from "react";
// Importation de la bibliothèque d'animation native de React
import "react-native-reanimated";
// Importation du composant de navigation Stack d'Expo Router pour gérer la navigation
import { Stack } from "expo-router";
// Importation du fournisseur Toast pour les notifications contextuelles
import { ToastProvider } from "react-native-toast-notifications";
// Importation de LogBox pour ignorer certains avertissements non pertinents dans l'application
import { LogBox } from "react-native";
// Importation du hook useFonts d'Expo pour charger les polices de caractères personnalisées
import { useFonts } from "expo-font";

export {
  // Expo Router propose un composant ErrorBoundary pour gérer les erreurs de manière centralisée
  ErrorBoundary,
} from "expo-router";

// Empêche l'écran de lancement (SplashScreen) de se cacher automatiquement avant le chargement des assets
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Chargement de la police de caractères personnalisée "TT-Octosquares-Medium" depuis le dossier assets
  // La fonction renvoie un état 'loaded' pour indiquer si le chargement a réussi, et 'error' en cas d'erreur
  const [loaded, error] = useFonts({
    "TT-Octosquares-Medium": require("../assets/fonts/TT-Octosquares-Medium.ttf"),
  });

  useEffect(() => {
    // Ignore tous les logs d'avertissement de l'application (à utiliser avec précaution)
    LogBox.ignoreAllLogs(true);
    // Si les polices sont chargées ou s'il y a une erreur, cache l'écran de lancement (SplashScreen)
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Si les polices ne sont pas encore chargées et qu'il n'y a pas d'erreur, retourner 'null' (affiche un écran vide)
  if (!loaded && !error) {
    return null;
  }

  // Une fois que tout est chargé, retourner le composant de navigation racine
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    // Fournit un contexte pour afficher les notifications toast partout dans l'application
    <ToastProvider>
      {/* Déclare une pile de navigation (Stack) où les en-têtes sont masqués pour tous les écrans */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Déclaration de l'écran principal nommé "index" */}
        <Stack.Screen name="index" />
        {/* Déclaration de l'écran d'onboarding situé dans le dossier /routes/onboarding */}
        <Stack.Screen name="/(routes)/onboarding/index" />
      </Stack>
    </ToastProvider>
  );
}
