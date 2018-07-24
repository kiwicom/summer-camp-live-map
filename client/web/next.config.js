require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: config => ({
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
        }
      ],
    },
  }),
};
