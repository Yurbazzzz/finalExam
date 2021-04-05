const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './src/script/app.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },

   module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },

   module: {
      rules: [{ test: /\.txt$/, use: 'raw-loader' }],
   },

   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};