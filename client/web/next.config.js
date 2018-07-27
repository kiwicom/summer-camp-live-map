require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const internalModules = /.*shared.*/;
const externalModules = /.*shared.*/;

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.symlinks = false;
    config.externals = config.externals.map(external => {
      if (typeof external !== 'function') return external;
      return (ctx, req, cb) =>
        externalModules.test(req) ? cb() : external(ctx, req, cb);
    });

    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      loader: defaultLoaders.babel,
      include: [internalModules],
    });

    return {
      ...config,
      plugins: [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ],
      module: {
        ...config.module,

        rules: [
          ...config.module.rules,

          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
              },
            },
          },
        ],
      },
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
      },
    };
  },
  webpackDevMiddleware: config => {
    const ignored = [config.watchOptions.ignored[0], externalModules];
    config.watchOptions.ignored = ignored;
    return config;
  },
};
