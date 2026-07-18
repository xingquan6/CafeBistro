export const en = {
  meta: {
    title: 'Café Bistro | Small-Batch Coffee & Bistro Fare',
    description: 'Café Bistro — small-batch roasted coffee and scratch-made bites, brewed and baked daily.',
  },
  nav: {
    home: 'Home',
    menu: 'Menu',
    recipes: 'Recipes',
    about: 'About',
    contact: 'Contact',
    toggleMenu: 'Toggle menu',
    language: 'Language',
  },
  footer: {
    explore: 'Explore',
    sayHello: 'Contact',
    rights: (year: number, name: string) => `© ${year} ${name}. All rights reserved.`,
  },
  buttons: {
    viewMenu: 'View Menu',
    seeFullMenu: 'See Full Menu',
    seeAllRecipes: 'See All Recipes',
    backToRecipes: '← Back to Recipes',
    backToRecipesPlain: 'Back to Recipes',
    sendMessage: 'Send Message',
  },
  business: {
    tagline: 'Small-batch coffee & scratch-made bites, roasted and baked right here.',
    heroSubcopy:
      "From the first pour-over of the morning to the last espresso before close, everything on our counter is made by hand, a few steps from where you're standing.",
    story: {
      heading: 'Roasted in the neighbourhood, for the neighbourhood',
      paragraphs: [
        "Café Bistro opened as a single espresso machine and four stools, run by two friends who couldn't find a coffee in the city that tasted like the ones they grew up on.",
        'A decade later, we still roast every bean and bake every croissant within sight of the counter where we serve it — we just have more stools now.',
      ],
    },
    values: [
      {
        title: 'Ethically Sourced',
        description:
          'Our green beans are bought direct-trade from growers we know by name, at prices that keep them farming next season too.',
      },
      {
        title: 'Small-Batch Roasted',
        description:
          'We roast in batches small enough to taste-test constantly, so every bag matches the cup that made us fall in love with it.',
      },
      {
        title: 'Scratch-Made Daily',
        description:
          'Pastries and bites are made fresh each morning in our kitchen — nothing trucked in frozen, nothing sitting for days.',
      },
      {
        title: 'Community First',
        description:
          'We keep a community board, a pay-it-forward jar, and the lights on late for anyone who needs a warm table and Wi-Fi.',
      },
    ],
  },
  quotes: [
    { text: 'Coffee is a language in itself.', author: 'Jackie Chan' },
    {
      text: 'There is no such thing as a small cup of coffee, only a small amount of time to drink it.',
      author: 'Café Bistro',
    },
    { text: 'Life happens, coffee helps.', author: 'Anonymous' },
    { text: 'A yawn is a silent scream for coffee.', author: 'Anonymous' },
    { text: 'But first, coffee.', author: 'Anonymous' },
    { text: 'Coffee is a hug in a mug.', author: 'Anonymous' },
  ],
  coffeeCategories: {
    Hot: 'Hot',
    Iced: 'Iced',
  } as Record<string, string>,
  // Curated ourselves rather than shown verbatim from the upstream API:
  // that dataset mixes in Swedish text for several drinks' names/ingredients.
  coffeeCatalog: {
    latte: { title: 'Latte', ingredients: ['Espresso', 'Steamed milk'] },
    americano: { title: 'Americano', ingredients: ['Espresso', 'Hot water'] },
    caramelLatte: { title: 'Caramel Latte', ingredients: ['Espresso', 'Steamed milk', 'Caramel syrup'] },
    macchiato: { title: 'Macchiato', ingredients: ['Espresso', 'Milk foam'] },
    cappuccino: { title: 'Cappuccino', ingredients: ['Espresso', 'Steamed milk', 'Milk foam'] },
    matchaLatte: { title: 'Matcha Latte', ingredients: ['Matcha powder', 'Steamed milk', 'Sugar'] },
    icedLatte: { title: 'Iced Latte', ingredients: ['Espresso', 'Cold milk', 'Ice'] },
    icedMocha: { title: 'Iced Mocha', ingredients: ['Espresso', 'Milk', 'Ice', 'Chocolate'] },
    frappeCaramel: { title: 'Caramel Frappé', ingredients: ['Coffee', 'Ice', 'Milk', 'Caramel syrup', 'Whipped cream'] },
    frappeMocha: { title: 'Mocha Frappé', ingredients: ['Coffee', 'Ice', 'Milk', 'Cocoa', 'Whipped cream'] },
    affogato: { title: 'Affogato', ingredients: ['Vanilla ice cream', 'Hot espresso'] },
    flatWhite: { title: 'Flat White', ingredients: ['Espresso', 'Steamed milk'] },
    caramelMacchiato: { title: 'Caramel Macchiato', ingredients: ['Espresso', 'Steamed milk', 'Vanilla syrup', 'Caramel drizzle'] },
    icedCoffee: { title: 'Iced Coffee', ingredients: ['Coffee', 'Ice', 'Sugar', 'Cream'] },
    icedEspresso: { title: 'Iced Espresso', ingredients: ['Espresso', 'Ice', 'Sugar', 'Cream'] },
    coldBrew: { title: 'Cold Brew', ingredients: ['Coarse-ground coffee', 'Cold water', '12-hour steep'] },
    frappuccino: { title: 'Frappuccino', ingredients: ['Espresso', 'Blended ice', 'Whipped cream'] },
    nitro: { title: 'Nitro Cold Brew', ingredients: ['Coffee', 'Nitrogen bubbles', 'Sugar', 'Cream'] },
    mazagran: { title: 'Mazagran', ingredients: ['Coffee', 'Sugar', 'Lemon', 'Rum'] },
  } as Record<string, { title: string; ingredients: string[] }>,
  recipeCategories: {
    Dessert: 'Dessert',
    Breakfast: 'Breakfast',
    Starter: 'Starter',
  } as Record<string, string>,
  recipeArea: 'Bistro Kitchen',
  pages: {
    home: {
      heroEyebrow: 'Welcome to',
      coffeeEyebrow: 'From Our Counter',
      coffeeTitle: 'Coffee, made properly',
      coffeeSubtitle: 'A rotating line-up of hot and iced drinks, pulled and poured to order.',
      valuesEyebrow: 'Why It Tastes Different',
      valuesTitle: 'What we stand behind',
      kitchenEyebrow: 'From The Kitchen',
      kitchenTitle: 'Fresh, scratch-made bites',
      kitchenSubtitle: "A taste of what's coming out of the oven this week.",
    },
    menu: {
      drinksEyebrow: 'Drinks',
      drinksTitle: 'The Coffee Bar',
      filterAll: 'All',
    },
    recipes: {
      heroEyebrow: 'From The Kitchen',
      heroTitle: 'Recipes worth baking at home',
      heroSubtitle: "A few of our favourite bites, in case you'd rather make them in your own kitchen.",
      categoryHeading: {
        Dessert: 'Dessert favourites',
        Breakfast: 'Breakfast favourites',
        Starter: 'Starter favourites',
      } as Record<string, string>,
    },
    recipeDetail: {
      notFoundTitle: 'Recipe not found',
      notFoundBody: "We couldn't find that recipe. It may have moved.",
      ingredients: 'Ingredients',
      method: 'Method',
    },
    about: {
      heroEyebrow: 'Our Story',
      heroTitle: 'About Café Bistro',
      heroSubtitle: 'Two friends, one espresso machine, and a neighbourhood that grew with us.',
      storyImageAlt: 'Inside Café Bistro',
      storyEyebrow: 'Since day one',
      valuesEyebrow: 'What Matters To Us',
      valuesTitle: 'Our values',
    },
    contact: {
      sendNoteEyebrow: 'Send A Note',
      sendNoteTitle: 'Get in touch',
      thanksTitle: 'Thanks for reaching out!',
      thanksBody: "We've got your message and will get back to you soon.",
      sending: 'Sending…',
      errorBody: "We couldn't send that — please try again, or email us directly at",
      contactMethodRequired: 'Please provide a phone number or an email so we can get back to you.',
      formName: 'Name',
      formCompany: 'Company',
      formPhone: 'Phone',
      formEmail: 'Email',
      formMessage: 'Message',
    },
  },
}

export type Translations = typeof en
