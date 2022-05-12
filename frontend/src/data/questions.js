const questions = [
  {
    id: 0,
    mission:
      "Je rentre de la plage et du sport et j'ai bien transpiré. Pour économiser l'eau, dois-je :",
    reponse1: {
      text: "A: Attendre qu'il pleuve",
      isCorrect: false,
    },
    reponse2: {
      text: "B: Me plonger dans un bain",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Prendre une douche rapide",
      isCorrect: true,
    },
    reponse4: {
      text: "D: Ne plus jamais me laver",
      isCorrect: false,
    },
    commentaire:
      "Prendre une douche bien sûr ! Et rapide si possible, car des douches trop longues consomment énormément d'eau. Le mieux c'est moins de 10 mn, qui équivalent déjà à 60 à 100 litres d'eau utilisée. Allez, 5 mn sous la douche, c'est parfait ! Pour un bain, l'eau consommée peut atteindre 200 à 500 litres d'eau, tout dépendant de la taille de la baignoire. Et bien sûr, ne plus se laver, c'est mauvais pour la santé ! On fait attention à l'eau ?",
    img: "https://trello.com/1/cards/627d17d6ef04bd47f8f5f277/attachments/627d17fd99fb6212dd20be5d/download/shower-kid.jpg",
    type: "enfant",
  },
  {
    id: 1,
    question:
      "Quand je sors d'une pièce le soir, à la maison, à quoi dois-penser ?",
    reponse1: {
      text: "A: À bien emporter mon GPS pour ne pas me perdre dans la maison",
      isCorrect: false,
    },
    reponse2: {
      text: "B: À ouvrir la fenêtre et à monté le chauffage",
      isCorrect: false,
    },
    reponse3: {
      text: "C: À les laisser allumer",
      isCorrect: false,
    },
    reponse4: {
      text: "D: À éteindre toutes les lumières",
      isCorrect: true,
    },
    commentaire:
      "À éteindre toutes les lumières, s'il n'y a plus personne dans la pièce bien sûr ! C'est un éco-geste permettant une économie d'énergie et c'est facile pour tous. Les laisser allumer, c'est gaspiller de l'électricité. Il existe des ampoules basse consommation qui sont économiques et qui peuvent être installées partout à la maison. Le mieux, c'est de privilégier la lumière naturelle, près d'une fenêtre, pour lire ou travailler.",
    img: "https://trello.com/1/cards/627d1782921c492335df2b0c/attachments/627d1d31062c1548ec3350e8/previews/627d1d31062c1548ec33511d/download/electricite-ecolo-300x302.png",
    type: "enfant",
  },
  {
    id: 2,
    question: "J'ai cassé un de mes jouets, que dois-je faire ?",
    reponse1: {
      text: "A: Je le jette par la fenêtre",
      isCorrect: false,
    },
    reponse2: {
      text: "B: J'en demande un autre pour le remplacer",
      isCorrect: false,
    },
    reponse3: {
      text: "C: J'essaye de le réparer",
      isCorrect: true,
    },
    reponse4: {
      text: "D: Je l'enterre dans le jardin comme un pirate",
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
      text: "A: Ceux qui viennent d'Europe ?",
      isCorrect: false,
    },
    reponse2: {
      text: "B: Ceux qui viennent du producteur de ma région ?",
      isCorrect: true,
    },
    reponse3: {
      text: "C: Ceux qui viennent d'Asie ?",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Beurk ! C'est pas bon les fruits !",
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
      text: "A: En voiture avec papa ou maman",
      isCorrect: false,
    },
    reponse2: {
      text: "B: À pied",
      isCorrect: true,
    },
    reponse3: {
      text: "C: En bus non électrique",
      isCorrect: false,
    },
    reponse4: {
      text: "D: En jet privé",
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
      text: "A: Une utilisation de certains déchets pour rendre les terres plus fertiles",
      isCorrect: true,
    },
    reponse2: {
      text: "B: Une entreprise qui livre les colis à vélo",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Des billets de train pris sur internet",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Le fait de poster des compotes sur les réseaux sociaux",
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
      text: "A : Jusqu’à 10 ans",
      isCorrect: false,
    },
    reponse2: {
      text: "B: Jusqu’à 8 mois",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Jusqu’à 100 ans",
      isCorrect: true,
    },
    reponse4: {
      text: "D: Jusqu’à 6 semaines",
      isCorrect: false,
    },
    commentaire:
      "Les déchets jetés sont une source de pollution visuelle mais contribuent aussi à polluer les sols, l’eau ou à menacer la biodiversité. À titre d’exemple, un mégot jeté peut polluer 500 litres d’eau ou encore un mètre cube de neige.",
    img: "https://trello.com/1/cards/627d161c1a66ed2cd202e3c6/attachments/627d16be67f1db447e137740/download/183151.1380884087.1.o1299137974.jpg",
    type: "adulte",
  },
  {
    id: 7,
    question: "Quel gaz a l'effet de serre le plus puissant ?",
    reponse1: {
      text: "A: L'argon",
      isCorrect: false,
    },
    reponse2: {
      text: "B: CO2",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Méthane",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Vapeur d'eau",
      isCorrect: true,
    },
    commentaire:
      "C'est la vapeur d’eau qui contribue pour 60 % à l’effet de serre. Les émissions de ce gaz par l’humanité à travers l’industrie n’ont cependant qu’un effet limité car la durée de vie de la vapeur d’eau est courte.",
    img: "https://c8.alamy.com/compfr/hwwxhg/un-dessin-de-paysage-avec-des-nuages-de-gaz-a-effet-de-serre-tels-que-le-methane-l-oxyde-de-carbone-du-dioxyde-de-carbone-et-l-ozone-l-augmentation-dans-l-atmosphere-hwwxhg.jpg",
    type: "adulte",
  },
  {
    id: 8,
    question:
      "La production d'énergie est notre source principale d'émissions de CO2. Quelle est la seconde ?",
    reponse1: {
      text: "A: La déforestation",
      isCorrect: true,
    },
    reponse2: {
      text: "B: L'activité volcanique",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Les flatulences de vaches",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Le Burning Man",
      isCorrect: false,
    },
    commentaire:
      "Il s'agit de la déforestation, qui représente aujourd'hui environ 15% de nos émissions.",
    img: "https://cdn.radiofrance.fr/s3/cruiser-production/2018/10/a7b70bc8-4200-484d-b170-c017968ddd34/870x489_gettyimages-628813428.jpg",
    type: "aldute",
  },
  {
    id: 9,
    question:
      "En matière d’alimentation, quelle solution est la plus efficace ?Cette question est requise",
    reponse1: {
      text: "A: Manger moins de viande",
      isCorrect: true,
    },
    reponse2: {
      text: "B: Installer des foyers de cuisson « propres » dans les pays en développement",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Mettre en place une culture du riz plus efficiente et durable",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Arrêtez le thon rouge",
      isCorrect: false,
    },
    commentaire:
      "Manger moins de viande serait la solution la plus efficace selon les scientifiques du projet Drawdown.En plus de cela, les animaux nous en serait sans doute reconaissant",
    img: "https://marsactu.fr/wp-content/uploads/2017/10/image-quand-le-riz-camarguais-raconte-l-histoire-des-indochinois-immigres-de-force-en-provence-02.jpg",
    type: "enfant",
  },
  {
    id: 10,
    question:
      "Quelle action me permettrait de diminuer le plus mon empreinte carbone",
    reponse1: {
      text: "A: Baisser de 1°C la consigne de chauffage",
      isCorrect: true,
    },
    reponse2: {
      text: "B: Reporter d’un an l’achat d’un nouveau smartphone",
      isCorrect: false,
    },
    reponse3: {
      text: "C: Consommer un repas par semaine sans viande",
      isCorrect: false,
    },
    reponse4: {
      text: "D: Eteindre les lumières en quittant une pièce",
      isCorrect: false,
    },
    commentaire:
      "Il nous faudrait baisser la consigne de chauffage. Mais sois libre de suivre les autres suggestions, ça ne fera pas de mal...",
    img: "https://cdn-s-www.lalsace.fr/images/E3ED48F5-04EC-4031-B0B7-BDC4698180AC/NW_raw/plus-ecologiques-les-cosmetiques-solides-suscitent-l-engouement-du-public-mais-tous-ne-se-valent-pas-dessin-phil-umbdenstock-1646218322.jpg",
    type: "adulte",
  },
  {
    id: 11,
    question: "",
    reponse1: {
      text: "A: ",
      isCorrect: false,
    },
    reponse2: {
      text: "B: ",
      isCorrect: false,
    },
    reponse3: {
      text: "C: ",
      isCorrect: false,
    },
    reponse4: {
      text: "D: ",
      isCorrect: false,
    },
    commentaire: "",
    img: "",
    type: "",
  },
];

export default questions;
