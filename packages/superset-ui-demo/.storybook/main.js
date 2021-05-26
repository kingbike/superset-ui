const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { lstatSync, readdirSync } = require('fs');

// find @superset-ui packages
const basePath = path.resolve(__dirname, '../../../node_modules/@superset-ui');
const chttlBasePath = path.resolve(__dirname, '../../../node_modules/@chttl');
const oriPackages = readdirSync(basePath).filter(name => {
  const stat = lstatSync(path.join(basePath, name));
  return stat.isSymbolicLink();
});
console.log('oriPackages', oriPackages);
console.log('path', path);

const chttlPackages = readdirSync(chttlBasePath).filter(name => {
  const stat = lstatSync(path.join(chttlBasePath, name));
  return stat.isSymbolicLink();
});

const packages = [...oriPackages, ...chttlPackages];

const PLUGIN_PACKAGES_PATH_REGEXP = new RegExp(
  `${path.resolve(__dirname, '../../../plugins/(legacy-)*(plugin|preset)-')}.+/src`,
);

module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-knobs/register',
    'storybook-addon-jsx/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
  ],
  stories: ['../storybook/stories/**/*Stories.[tj]sx'],
  webpackFinal: config => {
    // Make sure babel is applied to the package src
    // These are excluded by the default rule
    // because they reside in node_modules
    config.module.rules.push({
      include: PLUGIN_PACKAGES_PATH_REGEXP,
      exclude: /node_modules/,
      test: /\.jsx?$/,
      use: config.module.rules[0].use,
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.plugins.unshift(new ForkTsCheckerWebpackPlugin());

    config.resolve.extensions.push('.ts', '.tsx');

    // Let webpack know where to find the source code
    Object.assign(config.resolve.alias, {
      ...packages.reduce((acc, name) => {
        // const nameFiltered = null;
        // if( name.toLowerCase().includes('chttl')) {
        //   nameFiltered = [`@chttl/${name}$`]: path.join(chttlBasePath, name, 'src');
        // } else {
        //   nameFiltered = [`@superset-ui/${name}$`]: path.join(basePath, name, 'src') ;
        // }
        console.log('name', name);
        const nameFiltered = name.toLowerCase().includes('chttl')
          ? { [`@chttl/${name}$`]: path.join(chttlBasePath, name, 'src') }
          : { [`@superset-ui/${name}$`]: path.join(basePath, name, 'src') };
        console.log('nameFiltered', nameFiltered);
        return {
          ...acc,
          ...nameFiltered,
        };
      }, {}),
    });

    config.devtool = 'eval-cheap-module-source-map';
    config.devServer = {
      ...config.devServer,
      stats: 'minimal',
    };
    console.log('config', config);

    return config;
  },
};
