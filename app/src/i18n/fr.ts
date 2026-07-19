import type { Translations } from './en'

export const fr = {
  meta: {
    title: 'Café Bistro',
    description: 'Café Bistro',
  },
  nav: {
    home: 'Accueil',
    menu: 'Boissons',
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
    seeFullMenu: 'Voir toutes les boissons',
    sendMessage: 'Envoyer le message',
  },
  business: {
    heroSubcopy:
      "Du premier café filtre du matin au dernier espresso avant la fermeture, tout ce qui se trouve sur notre comptoir est fait à la main, à quelques pas d'où vous vous trouvez.",
  },
  quotes: [
    { text: "Le café n'est pas seulement une boisson, c'est un langage en soi.", author: 'AI' },
    {
      text: "Il n'existe pas de petit café. Seulement peu de temps pour le boire.",
      author: 'Café Bistro',
    },
    { text: 'La vie est compliquée. Le café est simple.', author: 'AI' },
    { text: "Arrêtez de hurler intérieurement. Venez plutôt prendre un café.", author: 'AI' },
    { text: "D'abord et avant tout : le café.", author: 'AI' },
    { text: 'Les matins comme celui-ci, le café est moins une boisson qu\'un câlin dans une tasse.', author: 'AI' },
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
  pages: {
    home: {
      heroEyebrow: 'Bienvenue chez',
      coffeeEyebrow: 'À notre comptoir',
      coffeeTitle: 'Du café, fait comme il faut',
      coffeeSubtitle: 'Une sélection rotative de boissons chaudes et glacées, préparées à la commande.',
    },
    menu: {
      drinksEyebrow: 'Boissons',
      drinksTitle: 'Café',
      filterAll: 'Tout',
    },
    about: {
      heroEyebrow: 'Une tradition mondiale',
      heroTitle: "L'histoire du café",
      heroSubtitle:
        "De la découverte d'un berger en Éthiopie à l'espresso que vous tenez aujourd'hui — l'histoire de la conquête du monde par le café.",
      historyEyebrow: 'Du grain à la tasse',
      historyTitle: 'Une brève histoire du café',
      history: [
        {
          era: 'IXe siècle',
          title: 'La légende de Kaldi',
          description:
            "Selon la légende, un berger de chèvres éthiopien nommé Kaldi remarqua que ses chèvres dansaient d'énergie après avoir grignoté les baies rouge vif d'un certain arbuste. La nouvelle de ce fruit énergisant se répandit jusque dans les monastères voisins, et l'histoire du café commença.",
        },
        {
          era: 'XVe siècle',
          title: 'Le café atteint l\'Arabie',
          description:
            "Dès les années 1400, le café était cultivé et échangé à travers le Yémen. Les moines soufis le préparaient pour rester éveillés durant de longues nuits de prière, et la boisson tira son nom du mot arabe qahwa.",
        },
        {
          era: 'XVIIe siècle',
          title: "Les cafés conquièrent l'Europe",
          description:
            "Le café traversa la Méditerranée jusqu'à Venise, puis Vienne, Londres et Paris. Les cafés devinrent des lieux de rassemblement pour marchands, écrivains et révolutionnaires — le tout premier réseau social.",
        },
        {
          era: 'Début du XXe siècle',
          title: "L'essor de l'espresso",
          description:
            "Des inventeurs italiens exploitèrent la pression de la vapeur pour préparer le café en quelques secondes plutôt qu'en minutes, donnant naissance à l'espresso — et, plus tard, à toute la culture des cafés qui l'entoure.",
        },
        {
          era: "Aujourd'hui",
          title: 'Un rituel sans frontières',
          description:
            "Des torréfacteurs artisanaux aux comptoirs de quartier comme le nôtre, le café demeure l'un des rares rituels partagés, sous une forme ou une autre, par presque toutes les cultures du monde.",
        },
      ],
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
