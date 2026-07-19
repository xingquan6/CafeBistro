import type { Translations } from './en'

export const fr = {
  meta: {
    title: 'Café Bistro | Café en petits lots et cuisine bistro',
    description: 'Café Bistro — café torréfié en petits lots et bouchées maison, préparés chaque jour.',
  },
  nav: {
    home: 'Accueil',
    menu: 'Menu',
    recipes: 'Recettes',
    about: 'À propos',
    contact: 'Contact',
    toggleMenu: 'Afficher le menu',
    language: 'Langue',
  },
  footer: {
    explore: 'Explorer',
    sayHello: 'Contact',
    rights: (year: number, name: string) => `© ${year} ${name}. Tous droits réservés.`,
  },
  buttons: {
    viewMenu: 'Voir le menu',
    seeFullMenu: 'Voir tout le menu',
    seeAllRecipes: 'Voir toutes les recettes',
    backToRecipes: '← Retour aux recettes',
    backToRecipesPlain: 'Retour aux recettes',
    sendMessage: 'Envoyer le message',
  },
  business: {
    tagline: 'Café en petits lots et bouchées maison, torréfié et cuisiné sur place.',
    heroSubcopy:
      "Du premier café filtre du matin au dernier espresso avant la fermeture, tout ce qui se trouve sur notre comptoir est fait à la main, à quelques pas d'où vous vous trouvez.",
    story: {
      heading: 'Torréfié dans le quartier, pour le quartier',
      paragraphs: [
        "Café Bistro a ouvert ses portes avec une seule machine à espresso et quatre tabourets, tenu par deux amis qui ne trouvaient nulle part en ville un café qui goûtait comme celui de leur enfance.",
        'Dix ans plus tard, nous torréfions encore chaque grain et cuisons chaque croissant à la vue du comptoir où nous le servons — nous avons juste plus de tabourets maintenant.',
      ],
    },
    values: [
      {
        title: 'Approvisionnement éthique',
        description:
          'Nos grains verts sont achetés en commerce direct auprès de producteurs que nous connaissons par leur nom, à des prix qui leur permettent de continuer à cultiver la saison suivante.',
      },
      {
        title: 'Torréfié en petits lots',
        description:
          'Nous torréfions par petits lots, assez petits pour être dégustés constamment, afin que chaque sac corresponde à la tasse qui nous a fait tomber en amour.',
      },
      {
        title: 'Fait maison chaque jour',
        description:
          'Les pâtisseries et bouchées sont préparées fraîches chaque matin dans notre cuisine — rien de congelé livré par camion, rien qui traîne pendant des jours.',
      },
      {
        title: "La communauté avant tout",
        description:
          "Nous tenons un babillard communautaire, un pot d'entraide, et gardons les lumières allumées tard pour quiconque a besoin d'une table chaleureuse et du Wi-Fi.",
      },
    ],
  },
  quotes: [
    { text: 'Le café est un langage en soi.', author: 'Jackie Chan' },
    {
      text: "Il n'existe pas de petite tasse de café, seulement peu de temps pour la boire.",
      author: 'Café Bistro',
    },
    { text: 'La vie arrive, le café aide.', author: 'Anonyme' },
    { text: 'Un bâillement est un cri silencieux pour du café.', author: 'Anonyme' },
    { text: "Mais d'abord, le café.", author: 'Anonyme' },
    { text: 'Le café, c\'est un câlin dans une tasse.', author: 'Anonyme' },
  ],
  coffeeCategories: {
    Hot: 'Chaud',
    Iced: 'Glacé',
  } as Record<string, string>,
  coffeeCatalog: {
    latte: { title: 'Latte', ingredients: ['Espresso', 'Lait mousseux'] },
    americano: { title: 'Americano', ingredients: ['Espresso', 'Eau chaude'] },
    caramelLatte: { title: 'Latte au caramel', ingredients: ['Espresso', 'Lait mousseux', 'Sirop de caramel'] },
    macchiato: { title: 'Macchiato', ingredients: ['Espresso', 'Mousse de lait'] },
    cappuccino: { title: 'Cappuccino', ingredients: ['Espresso', 'Lait mousseux', 'Mousse de lait'] },
    matchaLatte: { title: 'Latte au matcha', ingredients: ['Poudre de matcha', 'Lait mousseux', 'Sucre'] },
    icedLatte: { title: 'Latte glacé', ingredients: ['Espresso', 'Lait froid', 'Glace'] },
    icedMocha: { title: 'Mocha glacé', ingredients: ['Espresso', 'Lait', 'Glace', 'Chocolat'] },
    frappeCaramel: { title: 'Frappé au caramel', ingredients: ['Café', 'Glace', 'Lait', 'Sirop de caramel', 'Crème fouettée'] },
    frappeMocha: { title: 'Frappé au mocha', ingredients: ['Café', 'Glace', 'Lait', 'Cacao', 'Crème fouettée'] },
    affogato: { title: 'Affogato', ingredients: ['Crème glacée à la vanille', 'Espresso chaud'] },
    flatWhite: { title: 'Flat White', ingredients: ['Espresso', 'Lait mousseux'] },
    caramelMacchiato: { title: 'Macchiato au caramel', ingredients: ['Espresso', 'Lait mousseux', 'Sirop de vanille', 'Filet de caramel'] },
    icedCoffee: { title: 'Café glacé', ingredients: ['Café', 'Glace', 'Sucre', 'Crème'] },
    icedEspresso: { title: 'Espresso glacé', ingredients: ['Espresso', 'Glace', 'Sucre', 'Crème'] },
    coldBrew: { title: 'Cold brew', ingredients: ['Café moulu grossièrement', 'Eau froide', 'Infusion de 12 heures'] },
    frappuccino: { title: 'Frappuccino', ingredients: ['Espresso', 'Glace mixée', 'Crème fouettée'] },
    nitro: { title: "Cold brew à l'azote", ingredients: ['Café', "Bulles d'azote", 'Sucre', 'Crème'] },
    mazagran: { title: 'Mazagran', ingredients: ['Café', 'Sucre', 'Citron', 'Rhum'] },
  } as Record<string, { title: string; ingredients: string[] }>,
  recipeCategories: {
    Dessert: 'Dessert',
    Breakfast: 'Petit-déjeuner',
    Starter: 'Entrée',
  } as Record<string, string>,
  recipeArea: 'Cuisine du bistro',
  pages: {
    home: {
      heroEyebrow: 'Bienvenue chez',
      coffeeEyebrow: 'À notre comptoir',
      coffeeTitle: 'Du café, fait comme il faut',
      coffeeSubtitle: 'Une sélection rotative de boissons chaudes et glacées, préparées à la commande.',
      valuesEyebrow: 'Pourquoi ça goûte différent',
      valuesTitle: 'Ce que nous défendons',
      kitchenEyebrow: 'De notre cuisine',
      kitchenTitle: 'Des bouchées fraîches, faites maison',
      kitchenSubtitle: 'Un aperçu de ce qui sort du four cette semaine.',
    },
    menu: {
      drinksEyebrow: 'Boissons',
      drinksTitle: 'Le bar à café',
      filterAll: 'Tout',
    },
    recipes: {
      heroEyebrow: 'De notre cuisine',
      heroTitle: 'Des recettes à essayer chez vous',
      heroSubtitle: 'Quelques-unes de nos bouchées préférées, si vous préférez les préparer dans votre propre cuisine.',
      categoryHeading: {
        Dessert: 'Nos desserts préférés',
        Breakfast: 'Nos petits-déjeuners préférés',
        Starter: 'Nos entrées préférées',
      } as Record<string, string>,
    },
    recipeDetail: {
      notFoundTitle: 'Recette introuvable',
      notFoundBody: "Nous n'avons pas trouvé cette recette. Elle a peut-être été déplacée.",
      ingredients: 'Ingrédients',
      method: 'Préparation',
    },
    about: {
      heroEyebrow: 'Notre histoire',
      heroTitle: 'À propos de Café Bistro',
      heroSubtitle: 'Deux amis, une machine à espresso, et un quartier qui a grandi avec nous.',
      storyImageAlt: "L'intérieur de Café Bistro",
      storyEyebrow: 'Depuis le premier jour',
    },
    contact: {
      sendNoteEyebrow: 'Envoyez-nous un mot',
      sendNoteTitle: 'Restons en contact',
      thanksTitle: 'Merci de nous avoir écrit!',
      thanksBody: 'Nous avons bien reçu votre message et vous répondrons bientôt.',
      sending: 'Envoi en cours…',
      errorBody: "Nous n'avons pas pu envoyer votre message — veuillez réessayer, ou écrivez-nous directement à",
      contactMethodRequired: 'Veuillez indiquer un numéro de téléphone ou une adresse courriel pour que nous puissions vous répondre.',
      formName: 'Nom',
      formCompany: 'Entreprise',
      formPhone: 'Téléphone',
      formEmail: 'Courriel',
      formMessage: 'Message',
    },
  },
} satisfies Translations
