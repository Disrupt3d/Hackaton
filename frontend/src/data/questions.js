const questions = [
  {
    id: 0,
    question:
      "Je rentre de la plage et du sport et j'ai bien transpiré. Pour économiser l'eau, dois-je :",
    reponse1: {
      text: "Attendre qu'il pleuve",
      isCorrect: false,
    },
    reponse2: {
      text: "Me plonger dans un bain",
      isCorrect: false,
    },
    reponse3: {
      text: "Prendre une douche rapide",
      isCorrect: true,
    },
    reponse4: {
      text: "Ne plus jamais me laver",
      isCorrect: false,
    },
    commentaire:
      "Prendre une douche bien sûr ! Et rapide si possible, car des douches trop longues consomment énormément d'eau. Le mieux c'est moins de 10 mn, qui équivalent déjà à 60 à 100 litres d'eau utilisée. Allez, 5 mn sous la douche, c'est parfait ! Pour un bain, l'eau consommée peut atteindre 200 à 500 litres d'eau, tout dépendant de la taille de la baignoire. Et bien sûr, ne plus se laver, c'est mauvais pour la santé ! On fait attention à l'eau ?",
    img: "https://quiz.familiscope.fr/library/bayard_presse_0/images/2020/10/quiz-douche-299x300.jpeg",
    type: "enfant",
  },
  {
    id: 1,
    question:
      "Quand je sors d'une pièce le soir, à la maison, à quoi dois-penser ?",
    reponse1: {
      text: "À bien emporter mon GPS pour ne pas me perdre ",
      isCorrect: false,
    },
    reponse2: {
      text: "À ouvrir la fenêtre et à monté le chauffage",
      isCorrect: false,
    },
    reponse3: {
      text: "À les laisser allumer",
      isCorrect: false,
    },
    reponse4: {
      text: "À éteindre toutes les lumières",
      isCorrect: true,
    },
    commentaire:
      "À éteindre toutes les lumières, s'il n'y a plus personne dans la pièce bien sûr ! C'est un éco-geste permettant une économie d'énergie et c'est facile pour tous. Les laisser allumer, c'est gaspiller de l'électricité. Il existe des ampoules basse consommation qui sont économiques et qui peuvent être installées partout à la maison. Le mieux, c'est de privilégier la lumière naturelle, près d'une fenêtre, pour lire ou travailler.",
    img: "https://quiz.familiscope.fr/library/bayard_presse_0/images/2020/10/electricite-ecolo-300x302.png",
    type: "enfant",
  },
  {
    id: 2,
    question: "J'ai cassé un de mes jouets, que dois-je faire ?",
    reponse1: {
      text: "Je le jette par la fenêtre",
      isCorrect: false,
    },
    reponse2: {
      text: "J'en demande un autre pour le remplacer",
      isCorrect: false,
    },
    reponse3: {
      text: "J'essaye de le réparer",
      isCorrect: true,
    },
    reponse4: {
      text: "Je l'enterre dans le jardin comme un pirate",
      isCorrect: false,
    },
    commentaire:
      "Le bon réflexe à avoir, c'est d'abord se demander si le jouet est réparable. On estime à 40 millions le nombre de jouets jetés en France tous les ans : quel gaspillage et impact sur l'envirronement. Alors, pensons d'abord à réparer pour réutiliser : le meilleur déchet est celui que l'on ne produit pas. Cela ne veut pas dire qu'il ne faut plus avoir de jouets mais pas besoin non plus d'en avoir trop !",
    img: "https://quiz.familiscope.fr/library/bayard_presse_0/images/2020/10/ecologie-jouet-400x206.jpg.jpeg",
    type: "enfant",
  },
  {
    id: 3,
    question:
      "Je pars faire des courses avec mes parents pour acheter des fruits, lesquels vais-je privilégier ?",
    reponse1: {
      text: "Ceux qui viennent d'Europe ?",
      isCorrect: false,
    },
    reponse2: {
      text: "Ceux qui viennent du producteur de ma région ?",
      isCorrect: true,
    },
    reponse3: {
      text: "Ceux qui viennent d'Asie ?",
      isCorrect: false,
    },
    reponse4: {
      text: "Beurk ! C'est pas bon les fruits !",
      isCorrect: false,
    },
    commentaire:
      "J'achète le plus possible les produits du producteur de ma région et de saison. Pourquoi acheter un fruit qui vient de l’autre bout du monde par un moyen de transport qui a pollué l'atmosphère et qui sera sans doute plus cher ? Et, si je ne peux faire autrement, je privilégie les fruits qui ont le moins voyagé.",
    img: "https://quiz.familiscope.fr/library/bayard_presse_0/images/2020/10/ecologie-fruit-400x206.jpg.jpeg",
    type: "enfant",
  },
  {
    id: 4,
    question: "Pour aller à la plage, quel est le moyen le plus écolo ?",
    reponse1: {
      text: "En voiture avec papa ou maman",
      isCorrect: false,
    },
    reponse2: {
      text: "À pied",
      isCorrect: true,
    },
    reponse3: {
      text: "En bus non électrique",
      isCorrect: false,
    },
    reponse4: {
      text: "En jet privé",
      isCorrect: false,
    },
    commentaire:
      "À pied et, en plus, c'est bon pour le corps. Si la plage est trop loin, on peut utiliser un vélo, une trottinette ou bien un bus, mais électrique. Les voitures participent au réchauffement climatique par la pollution de l'air et l'émission de gaz toxiques, mauvais pour la santé de l'homme. Sans parler de la pollution sonore. Allez, on marche ?",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/2229114-couverture-et-parasol-sur-plage-de-sable-plat-couleur-illustrationle-sac-serviette-et-bouteille-de-creme-solaire-articles-pour-bronzer-vacances-d-ete-bord-de-mer-2d-dessin-anime-paysage-avec-eau-sur-fond-vectoriel.jpg",
    type: "enfant",
  },
  {
    id: 5,
    question: "Sais-tu ce que c'est que le compostage ?",
    reponse1: {
      text: "Récupérer les déchets pour des sols plus fertiles",
      isCorrect: true,
    },
    reponse2: {
      text: "Une entreprise qui livre les colis à vélo",
      isCorrect: false,
    },
    reponse3: {
      text: "Des billets de train pris sur internet",
      isCorrect: false,
    },
    reponse4: {
      text: "Le fait de poster des compotes sur les réseaux sociaux",
      isCorrect: false,
    },
    commentaire: "",
    img: "https://coeurdechartreuse.fr/wp-content/uploads/2021/04/Compostage-paillage.png",
    type: "enfant",
  },
  {
    id: 6,
    question:
      "À quelle vitesse se dégrade une cannette de soda dans la nature ?",
    reponse1: {
      text: "Jusqu’à 10 ans",
      isCorrect: false,
    },
    reponse2: {
      text: "Jusqu’à 8 mois",
      isCorrect: false,
    },
    reponse3: {
      text: "Jusqu’à 100 ans",
      isCorrect: true,
    },
    reponse4: {
      text: "Jusqu’à 6 semaines",
      isCorrect: false,
    },
    commentaire:
      "Les déchets jetés sont une source de pollution visuelle mais contribuent aussi à polluer les sols, l’eau ou à menacer la biodiversité. À titre d’exemple, un mégot jeté peut polluer 500 litres d’eau ou encore un mètre cube de neige.",
    img: "https://i.pinimg.com/736x/13/f6/d4/13f6d4dfba58d19703ca102536a54391--vintage-tags-dragon-ball.jpg",
    type: "parent",
  },
  {
    id: 7,
    question: "Quel gaz a l'effet de serre le plus puissant ?",
    reponse1: {
      text: "L'argon",
      isCorrect: false,
    },
    reponse2: {
      text: "CO2",
      isCorrect: false,
    },
    reponse3: {
      text: "Méthane",
      isCorrect: false,
    },
    reponse4: {
      text: "Vapeur d'eau",
      isCorrect: true,
    },
    commentaire:
      "C'est la vapeur d’eau qui contribue pour 60 % à l’effet de serre. Les émissions de ce gaz par l’humanité à travers l’industrie n’ont cependant qu’un effet limité car la durée de vie de la vapeur d’eau est courte.",
    img: "https://c8.alamy.com/compfr/hwwxhg/un-dessin-de-paysage-avec-des-nuages-de-gaz-a-effet-de-serre-tels-que-le-methane-l-oxyde-de-carbone-du-dioxyde-de-carbone-et-l-ozone-l-augmentation-dans-l-atmosphere-hwwxhg.jpg",
    type: "parent",
  },
  {
    id: 8,
    question:
      "La production d'énergie est notre source principale d'émissions de CO2. Quelle est la seconde ?",
    reponse1: {
      text: "La déforestation",
      isCorrect: true,
    },
    reponse2: {
      text: "L'activité volcanique",
      isCorrect: false,
    },
    reponse3: {
      text: "Les flatulences de vaches",
      isCorrect: false,
    },
    reponse4: {
      text: "Le Burning Man",
      isCorrect: false,
    },
    commentaire:
      "Il s'agit de la déforestation, qui représente aujourd'hui environ 15% de nos émissions.",
    img: "https://cdn.radiofrance.fr/s3/cruiser-production/2018/10/a7b70bc8-4200-484d-b170-c017968ddd34/870x489_gettyimages-628813428.jpg",
    type: "parent",
  },
  {
    id: 9,
    question:
      "En matière d’alimentation, quelle solution est la plus efficace ?",
    reponse1: {
      text: "Manger moins de viande",
      isCorrect: true,
    },
    reponse2: {
      text: "Installer des foyers de cuisson « propres »",
      isCorrect: false,
    },
    reponse3: {
      text: "Mettre en place une culture du riz plus durable",
      isCorrect: false,
    },
    reponse4: {
      text: "Arrêtez le thon rouge",
      isCorrect: false,
    },
    commentaire:
      "Manger moins de viande serait la solution la plus efficace selon les scientifiques du projet Drawdown.En plus de cela, les animaux nous en serait sans doute reconaissant",
    img: "https://marsactu.fr/wp-content/uploads/2017/10/image-quand-le-riz-camarguais-raconte-l-histoire-des-indochinois-immigres-de-force-en-provence-02.jpg",
    type: "parent",
  },
  {
    id: 10,
    question:
      "Quelle action me permettrait de diminuer le plus mon empreinte carbone",
    reponse1: {
      text: "Baisser de 1°C la consigne de chauffage",
      isCorrect: true,
    },
    reponse2: {
      text: "Reporter d’un an l’achat d’un nouveau smartphone",
      isCorrect: false,
    },
    reponse3: {
      text: "Consommer un repas par semaine sans viande",
      isCorrect: false,
    },
    reponse4: {
      text: "Eteindre les lumières en quittant une pièce",
      isCorrect: false,
    },
    commentaire:
      "Il nous faudrait baisser la consigne de chauffage. Mais sois libre de suivre les autres suggestions, ça ne fera pas de mal...",
    img: "https://cdn-s-www.lalsace.fr/images/E3ED48F5-04EC-4031-B0B7-BDC4698180AC/NW_raw/plus-ecologiques-les-cosmetiques-solides-suscitent-l-engouement-du-public-mais-tous-ne-se-valent-pas-dessin-phil-umbdenstock-1646218322.jpg",
    type: "parent",
  },
];

export default questions;
