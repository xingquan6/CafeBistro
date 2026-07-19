export const en = {
  meta: {
    title: 'Café Bistro',
    description: 'Café Bistro',
  },
  nav: {
    home: 'Home',
    menu: 'Drinks',
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
    seeFullMenu: 'See All Drinks',
    sendMessage: 'Send Message',
  },
  business: {
    heroSubcopy:
      "Coffee is so much more than a morning routine—it is a craftsmanship, a comfort, and a universal language shared across the world. From the slow, meticulous art of a morning pour-over to the rich intensity of a perfectly pulled espresso, every cup tells a story of dedicated growers, careful roasting, and precise brewing. It is a daily anchor that invites us to slow down, catch our breath, and connect with the people around us. Ultimately, coffee is a warm hug in a mug, roasted and brewed to transform an ordinary moment into something truly special.",
  },
  quotes: [
    { text: 'Coffee is not just a drink—its a language of its own.', author: 'AI' },
    {
      text: 'Never a small coffee. Only a short moment to drink it.',
      author: 'Café Bistro',
    },
    { text: 'Life is complicated. Coffee is simple.', author: 'AI' },
    { text: 'Stop screaming inside. Come grab a coffee.', author: 'AI' },
    { text: 'First things first: Coffee.', author: 'AI' },
    { text: 'On mornings like this, coffee is less of a drink and more of a hug in a mug.', author: 'AI' },
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
  pages: {
    home: {
      heroEyebrow: 'Welcome to',
      coffeeEyebrow: 'From Our Counter',
      coffeeTitle: 'Coffee, made properly',
      coffeeSubtitle: 'A rotating line-up of hot and iced drinks, pulled and poured to order.',
    },
    menu: {
      drinksEyebrow: 'Drinks',
      drinksTitle: 'Coffee',
      filterAll: 'All',
    },
    about: {
      heroEyebrow: 'A Global Tradition',
      heroTitle: 'The History of Coffee',
      heroSubtitle:
        "From a shepherd's discovery in Ethiopia to the espresso in your hands today — the story of how coffee conquered the world.",
      historyEyebrow: 'From Bean to Cup',
      historyTitle: 'A Brief History of Coffee',
      history: [
        {
          era: '9th Century',
          title: 'The Legend of Kaldi',
          description:
            'According to legend, an Ethiopian goat herder named Kaldi noticed his goats dancing with energy after nibbling on the bright red berries of a certain shrub. Word of the energizing fruit spread to nearby monasteries, and coffee\'s story began.',
        },
        {
          era: '15th Century',
          title: 'Coffee Reaches Arabia',
          description:
            'By the 1400s, coffee was being grown and traded across Yemen. Sufi monks brewed it to stay alert through long nights of prayer, and the drink took its name from the Arabic word qahwa.',
        },
        {
          era: '17th Century',
          title: 'Coffeehouses Conquer Europe',
          description:
            'Coffee crossed the Mediterranean into Venice, then Vienna, London, and Paris. Coffeehouses became gathering places for merchants, writers, and revolutionaries — the original social network.',
        },
        {
          era: 'Early 1900s',
          title: 'The Rise of Espresso',
          description:
            'Italian inventors harnessed steam pressure to brew coffee in seconds rather than minutes, giving the world the espresso — and, eventually, the café culture built around it.',
        },
        {
          era: 'Today',
          title: 'A Ritual Without Borders',
          description:
            'From specialty roasters to neighbourhood counters like ours, coffee remains one of the few rituals shared, in some form, by nearly every culture on earth.',
        },
      ],
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
