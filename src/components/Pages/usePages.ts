import { PageProps } from './Page';

const pages: PageProps[] = [
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
