module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
};
