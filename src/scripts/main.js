import $ from 'jquery';
import builder from './builder';

const main = () => {
  const content = $(`<p>Here is main content </p>`);
  content.append(new Date().toLocaleString());

  return builder('main', content, 'main');
};

export { main };

