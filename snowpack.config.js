// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    namedExports: ['@svgdotjs/svg.js'],
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')()],
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
};
