// Importation des utilitaires de React Native
import { DimensionValue, Dimensions, PixelRatio, Platform } from 'react-native';

// Récupération des dimensions de l'écran (hauteur et largeur) pour l'interface utilisateur
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

// Détection de la plateforme iOS
export const IsIOS = Platform.OS === 'ios';
// Détection des appareils iPad en utilisant le ratio hauteur/largeur spécifique
export const IsIPAD = IsIOS && SCREEN_HEIGHT / SCREEN_WIDTH < 1.6;
// Détection des appareils Android
export const IsAndroid = Platform.OS === 'android';

// Vérifie si l'appareil a une encoche (notch) en fonction de la hauteur de l'écran
export const IsHaveNotch = SCREEN_HEIGHT > 750;

// Vérifie si l'appareil est un iPhone 12 Pro Max (ou appareil de taille similaire)
export const Isiphone12promax = IsIOS && SCREEN_HEIGHT > 2778;

// Fonction pour calculer une hauteur proportionnelle à l'écran de l'appareil
export const windowHeight = (height: DimensionValue): number => {
  // Si aucune hauteur n'est fournie, retourne 0
  if (!height) {
    return 0;
  }
  // Calcule la hauteur proportionnelle basée sur une référence de hauteur de 667
  let tempHeight = SCREEN_HEIGHT * (parseFloat(height.toString()) / 667);
  // Arrondit le résultat à la valeur de pixel la plus proche
  return PixelRatio.roundToNearestPixel(tempHeight);
};

// Fonction pour calculer une largeur proportionnelle à l'écran de l'appareil
export const windowWidth = (width: DimensionValue): number => {
  // Si aucune largeur n'est fournie, retourne 0
  if (!width) {
    return 0;
  }
  // Calcule la largeur proportionnelle basée sur une référence de largeur de 480
  let tempWidth = SCREEN_WIDTH * (parseFloat(width.toString()) / 480);
  // Arrondit le résultat à la valeur de pixel la plus proche
  return PixelRatio.roundToNearestPixel(tempWidth);
};

// Déclaration des tailles de police (fontSizes) proportionnelles à la largeur de l'écran
export const fontSizes = {
  FONT6: windowWidth(6),
  FONT7: windowWidth(7),
  FONT8: windowWidth(8),
  FONT9: windowWidth(9),
  FONT10: windowWidth(10),
  FONT11: windowWidth(11),
  FONT12: windowWidth(12),
  FONT13: windowWidth(13),
  FONT14: windowWidth(14),
  FONT15: windowWidth(15),
  FONT16: windowWidth(16),
  FONT17: windowWidth(17),
  FONT18: windowWidth(18),
  FONT19: windowWidth(19),
  FONT20: windowWidth(20),
  FONT21: windowWidth(21),
  FONT22: windowWidth(22),
  FONT23: windowWidth(23),
  FONT24: windowWidth(24),
  FONT25: windowWidth(25),
  FONT26: windowWidth(26),
  FONT27: windowWidth(27),
  FONT28: windowWidth(28),
  FONT30: windowWidth(30),
};
