import Images from "../utils/images"; // Importation des images à partir d'un fichier utilitaire

// Définition d'un tableau de slides pour un carrousel ou une présentation
export const slides = [
  {
    id: 0,
    image: Images.destination, // Image pour la première slide
    text: "Choose Your Destination", // Titre de la slide
    description: "First choose your destination where you want to go!", // Description de la slide
  },
  {
    id: 1,
    image: Images.trip, // Image pour la deuxième slide
    text: "Wait for your driver", // Titre de la slide
    description: "Just wait for a while now until your driver is picking you!", // Description de la slide
  },
  {
    id: 2,
    image: Images.bookRide, // Image pour la troisième slide
    text: "Enjoy Your Trip", // Titre de la slide
    description:
      "Now enjoy your trip, pay your driver after reaching the destination!", // Description de la slide
  },
];

// Création d'une connexion WebSocket
export const ws = new WebSocket("ws://192.168.1.2:8080"); // Remplacez l'IP par celle de votre serveur
