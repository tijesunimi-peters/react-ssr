import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const templater = function (title, template) {
  const content = renderToString(<App />);
  return template.replace(/\${content}/, content).replace(/\${title}/, title);
}

export { templater };

