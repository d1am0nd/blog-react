interface IAbout {
  summary: string;
  paragraphs: Array<string>;
  social: Array<{name: string, url: string}>;
};

const about: IAbout = {
  'summary': '25 year old backend developer, that delves into all sorts of non-backend related things in my spare time. 🇸🇮',
  'paragraphs': [
    'Recent interests include Flutter and TypeScript',
  ],
  'social': [
    {
      'name': 'LinkedIn',
      'url': 'https://www.linkedin.com/in/dev-korde%C5%A1/',
    },
    {
      'name': 'Github',
      'url': 'https://github.com/d1am0nd/',
    },
    {
      'name': 'StackOverflow',
      'url': 'https://stackoverflow.com/users/5405630/devk',
    },
  ],
};

export default about;
