import builder from './builder';
import '../styles/header.scss';

const header = () => {
  const content = '<a href="/">Logo</a>';

  return builder('header', content, 'header');
};

export { header };
