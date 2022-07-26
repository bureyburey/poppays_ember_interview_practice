'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const nodeSass = require('node-sass');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      implementation: nodeSass,
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        'transform-react-jsx',
        require.resolve('ember-auto-import/babel-plugin'),
      ],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import({
    development: 'node_modules/react/umd/react.development.js',
    production: 'node_modules/react/umd/react.production.min.js',
  });

  app.import({
    development: 'node_modules/react-dom/umd/react-dom.development.js',
    production: 'node_modules/react-dom/umd/react-dom.production.min.js',
  });

  app.import('vendor/shims/react.js');
  app.import('vendor/shims/react-dom.js');

  return app.toTree();
};
