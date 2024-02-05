const authorConfig = {
  author: 'meanc',
  avatar: '//avatar.jpg',
  description: 'A developer who loves to code and learn new things.',
  email: 'cloudflypeng@gmail.com',
  social: [
    {
      name: 'github',
      icon: 'i-logos-github-icon',
      href: 'https://github.com/cloudflypeng',
    },
    {
      name: 'twitter',
      icon: 'i-logos-twitter',
      href: 'https://twitter.com/meanc_p',
    },
  ],
  location: 'Shanghai, China',
};

const siteConfig = {
  siteName: 'MEANC-BLOG',
  description: 'A developer who loves to code and learn new things.',
  url: 'https://meanc.github.io',
  lang: 'en',
  locale: 'en_US',
  image: '/images/og.jpg',
  twitter: '@meanc',
  fbAppId: '',
  fbPage: '',
  type: 'website',
};

const NavMenu = [
  {
    name: 'Blog',
    href: '/posts',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Connect',
    href: '/connect',
  },
];

export { authorConfig, siteConfig, NavMenu };
