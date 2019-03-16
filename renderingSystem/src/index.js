import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/src/App';

/**
 * @file This is the server side renderer. The renderer replaces `${}` strings in the template with the appropriate value. StaticRouter is used to sync routes from the client `BrowserRouter`.
 * @name RenderingSystem
 * @example
 *  const template = `
 *    <html>
 *      <head>
 *        <title>${title}</title>
 *      </head>
 *      <body>
 *        ${content}
 *      </body>
 *    </html>
 * `
 *
 *  const title = "About"
 *  const location = request.url
 *  const htmlBody = templater(title, template, location)
 *
 *  response.send(htmlBody)
 *
 * @requires client/src/App.js
 * @param {string} title
 * @param {string} template
 * @param {string} location
 * @returns {string} html
 */
const templater = function (title, template, location) {
  const content = renderToString(
    <StaticRouter location={location} context={{}}>
      <App />
    </StaticRouter>
  );

  return template.replace(/\${content}/, content).replace(/\${title}/, title);
}

export { templater };

