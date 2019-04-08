import builder from './builder';
import '../styles/footer.scss';

const footer = () => {
  const content = '<p>Easycode 2019 (c)</p>';

  return builder('footer', content, 'footer' );
};

export { footer };

