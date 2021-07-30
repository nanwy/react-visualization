const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: {
        /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      },
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: {
        modules: true,
        importLoaders: 1 /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */,
      },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
    // devServer: {
    //   disableHostCheck: true,
    //   port: 3000,
    //   proxy: {
    //     "/": {
    //       target: "http://123.57.219.169:3003",
    //       // target: "https://api.vislib.best/",
    //     },
    //   },
    //   overlay: {
    //     warning: false,
    //     errors: false,
    //   },
    // },
  },
};
