// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'TreePPL',
  tagline: 'A Universal Probabilistic Programming Language for Phylogenetics and Evolutionary Biology',
  url: 'http://treeppl.org/',
  baseUrl: '/',
  projectName: 'treeppl.github.io',
  organizationName: 'treeppl',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  // TODO We should eventually fix broken links and throw if any are found
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs', // Main documentation
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs', // This makes docs appear at /docs/
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'getting-started',
        path: 'getting-started',
        routeBasePath: 'getting-started',
        sidebarPath: require.resolve('./sidebarsGettingStarted.js'),
        // ... other options
      },
    ],
  ],
  themeConfig: {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'TreePPL',
        // TODO Add TreePPL logo
        // logo: {
        //   alt: 'TreePPL Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/getting-started/getting-started',
            position: 'left',
            label: 'Getting Started',
            activeBaseRegex: `/getting-started/`
          },
          {
            type: 'doc',
            docId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'devteam',
            position: 'left',
            label: 'Contributors',
          },
          {
            href: 'https://github.com/treeppl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'GMDMVF6JJU',
  
        // Public API key: it is safe to commit it
        apiKey: '893a4c3bf8a2be3d557fca8a80ab4471',
  
        indexName: 'treeppl',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Documentation',
        //     items: [
        //       {
        //         label: 'TreePPL',
        //         to: '/docs/treeppl',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Links',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/treeppl',
        //       },
        //       {
        //         to: 'devteam',
        //         label: "Meet the Developers",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="/devteam"> TreePPL Research and Development Team</a> <br>
        Built via <a href="https://docusaurus.io">Docusaurus.io</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash']
      },
    },
};

module.exports = config;
