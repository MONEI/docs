const path = require('path');

module.exports = {
  title: 'MONEI Documentation',
  url: 'https://docs.monei.com',
  tagline: 'Explore our guides and examples to integrate MONEI',
  trailingSlash: true,
  baseUrl: '/',
  favicon: 'https://assets.monei.com/images/icon.png',
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
      additionalLanguages: ['php']
    },
    algolia: {
      apiKey: '4b9b0bfa1a19b86cf70a5bf9c81e9c80',
      indexName: 'monei',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      title: 'MONEI',
      hideOnScroll: false,
      logo: {
        alt: 'MONEI',
        src: 'https://assets.monei.com/images/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right'
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API',
          position: 'right'
        },
        {
          to: 'https://support.monei.com',
          label: 'Support',
          position: 'right'
        },
        {
          to: 'https://dashboard.monei.com',
          label: 'Dashboard',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} MONEI Inc. — <a href="https://aws.amazon.com/es/blogs/startups/serverless-architecture-powers-moneis-fast-secure-and-scalable-digital-payment-solutions/" target="_blank" rel="noreferrer noopener">Winner of the AWS Startup Architecture Challenge 🏆</a>`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          //includeCurrentVersion: true,
          //disableVersioning: true,
          sidebarCollapsible: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.7
        }
      }
    ]
  ],
  plugins: [
    path.resolve(__dirname, './inject-scripts.js'),
    path.resolve(__dirname, './webpack-config.js'),
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-NHS56QJ'
      }
    ]
  ]
};
