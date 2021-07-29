const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
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
