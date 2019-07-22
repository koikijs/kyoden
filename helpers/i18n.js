import React from 'react';

const resources = {};
const acceptLanguage = require('accept-language');

try {
  const klawSync = require('klaw-sync');
  const fs = require('fs-extra');
  const path = require('path');

  const files = klawSync('locales', { nodir: true });
  files.forEach((file) => {
    const resource = fs.readJSONSync(file.path);
    const lang = path.basename(file.path, '.json');
    resources[lang] = resource;
  });

  acceptLanguage.languages(['en', 'ja']);
} catch (e) {}
export function get({ headers }) {
  if (typeof window !== 'undefined') {
    const { resource, lang } = window.__i18n;
    return {
      t: key => resource[key],
      resource,
      lang,
    };
  }
  if (headers) {
    const lang = acceptLanguage.get(headers['accept-language']);
    const resource = resources[lang] || resources.en;
    return {
      t: key => resource[key],
      resource,
      lang,
    };
  }
  throw new Error(
    'Unexpected condition. req is needed for SSR, otherwise window object should be exists',
  );
}

const Context = React.createContext({
  t: () => '',
  resource: {},
  lang: 'en',
});

export const { Provider, Consumer } = Context;
