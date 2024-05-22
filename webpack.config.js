module.exports = {
  // Додайте цей блок у ваш конфігураційний файл webpack
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              throwIfNamespace: false,
            },
          },
          // Додайте інші лоадери, якщо потрібно
        ],
      },
      // Додайте інші правила, якщо потрібно
    ],
  },
};