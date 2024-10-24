// Importation de l'icône Person depuis le dossier assets/icons
import { Person } from "@/assets/icons/person";
// Importation des couleurs de l'application depuis le thème de couleurs
import color from "@/themes/app.colors";
// Importation des icônes personnalisées depuis le dossier utils/icons
import { Car, CarPrimary, Category, Home, HomeLight } from "@/utils/icons";
// Importation du composant Tabs d'expo-router pour gérer les onglets de l'application
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    // Déclaration des onglets de l'application avec les options d'affichage
    <Tabs
      // Définition des options de chaque écran en fonction de la route
      screenOptions={({ route }) => {
        return {
          // Masque l'en-tête de chaque écran
          headerShown: false,
          // Masque les étiquettes de texte des onglets
          tabBarShowLabel: false,
          // Définition de l'icône de l'onglet en fonction de l'écran et de son état (sélectionné ou non)
          tabBarIcon: ({ focused }) => {
            let iconName;
            // Si la route correspond à l'écran "home"
            if (route.name === "home") {
              // Si l'onglet est sélectionné, affiche l'icône Home avec la couleur du bouton sélectionné
              if (focused) {
                iconName = (
                  <Home colors={color.buttonBg} width={24} height={24} />
                );
              } else {
                // Sinon, affiche l'icône Home en mode non sélectionné
                iconName = <HomeLight />;
              }
            } 
            // Si la route correspond à l'écran "services/index"
            else if (route.name === "services/index") {
              // Affiche l'icône Category avec une couleur différente selon l'état sélectionné ou non
              iconName = (
                <Category colors={focused ? color.buttonBg : "#8F8F8F"} />
              );
            } 
            // Si la route correspond à l'écran "history/index"
            else if (route.name === "history/index") {
              // Si l'onglet est sélectionné, affiche l'icône CarPrimary avec la couleur du bouton sélectionné
              if (focused) {
                iconName = <CarPrimary color={color.buttonBg} />;
              } else {
                // Sinon, affiche l'icône Car avec une couleur non sélectionnée
                iconName = <Car colors={"#8F8F8F"} />;
              }
            } 
            // Si la route correspond à l'écran "profile/index"
            else if (route.name === "profile/index") {
              // Si l'onglet est sélectionné, affiche l'icône Person avec la couleur du bouton sélectionné
              if (focused) {
                iconName = <Person fill={color.buttonBg} />;
              } else {
                // Sinon, affiche l'icône Person avec une couleur non sélectionnée
                iconName = <Person fill={"#8F8F8F"} />;
              }
            }
            // Retourne l'icône appropriée en fonction de la route et de l'état sélectionné
            return iconName;
          },
        };
      }}
    >
      {/* Déclaration des écrans qui sont des onglets dans l'application */}
      <Tabs.Screen name="home" />
      <Tabs.Screen name="services/index" />
      <Tabs.Screen name="history/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
}
