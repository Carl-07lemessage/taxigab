import { useTheme } from "@react-navigation/native"; // Hook pour accéder au thème de l'application
import { View, Text, StyleSheet } from "react-native"; // Composants de base de React Native
import fonts from "@/themes/app.fonts"; // Importation des polices personnalisées
import color from "@/themes/app.colors"; // Importation des couleurs personnalisées
import { fontSizes, windowHeight } from "@/themes/app.constant"; // Importation des constantes (tailles des polices, hauteur de la fenêtre)

interface TitleViewProps {
  // Définition de l'interface pour les propriétés du composant
  title: string; // Titre de la vue
  subTitle: string; // Sous-titre de la vue
}

export default function TitleView({ title, subTitle }: TitleViewProps) {
  // Fonction qui prend le titre et le sous-titre en tant que propriétés
  const { colors } = useTheme(); // Utilisation du hook pour obtenir les couleurs du thème

  return (
    <View>
      {/* Affichage du titre avec style dynamique en fonction du thème */}
      <Text style={[styles.main, { color: colors.text }]}>{title}</Text>
      {/* Affichage du sous-titre avec un style statique */}
      <Text style={[styles.sub]}>{subTitle}</Text>
    </View>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  main: {
    // Style pour le titre principal
    fontSize: fontSizes.FONT30, // Taille de la police pour le titre
    fontFamily: fonts.medium, // Utilisation de la police "medium"
    marginTop: windowHeight(2), // Marge supérieure proportionnelle à la hauteur de l'écran
  },
  sub: {
    // Style pour le sous-titre
    color: color.secondaryFont, // Couleur du texte pour le sous-titre
    marginTop: windowHeight(0.6), // Petite marge supérieure proportionnelle
    fontSize: fontSizes.FONT20, // Taille de la police pour le sous-titre
    fontFamily: fonts.medium, // Police "medium" pour le sous-titre
    marginBottom: windowHeight(2), // Marge inférieure proportionnelle
  },
});
