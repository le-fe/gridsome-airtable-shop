// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Demo Gridsome + AirTable",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",

      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false,
      },
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: "Events",
            typeName: "Event", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
          {
            name: "Products",
            typeName: "Product", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
        ],
      },
    },
  ],
  templates: {
    Event: "/events/:id", //optional
    Product: "/products/:id", //optional
  },
};
