const $ = require('jquery');
const builder = require('./builder');

module.exports = () => {
  const content = $(`<p>Here is main content </p>`);
  content.append(new Date().toLocaleString());

  return builder('main', content, 'main');
};

