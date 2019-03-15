import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/src/App';

const templater = function (title, template, location) {
  const content = renderToString(
    <StaticRouter location={location} context={{}}>
      <App skeleton={location} />
    </StaticRouter>
  );

  return template.replace(/\${content}/, content).replace(/\${title}/, title);
}

export { templater };

