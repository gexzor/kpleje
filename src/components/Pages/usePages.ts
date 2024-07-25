import { PageProps } from './Page';

const pages: PageProps[] = [
  {
    title: 'Home',
    subtitle: 'Welcome to our site',
    content: 'This is the content of the Home page.',
  },
  {
    title: 'About',
    subtitle: 'Learn more about us',
    content: 'This is the content of the About page.',
  },
  {
    title: 'Contact',
    subtitle: 'Get in touch with us',
    content: 'This is the content of the Contact page.',
  },
];

export const usePages = () => {
  return pages;
};
