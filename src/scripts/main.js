import $ from 'jquery';
import builder from './builder';
import '../styles/main.scss';

const main = () => {
  const content = $(`<p>Here is main content </p>`);
  content.append(new Date().toLocaleString());

  return builder('main', content, 'main');
};

export { main };

