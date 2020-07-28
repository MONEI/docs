const path = require('path');

module.exports = {
  title: 'MONEI Documentation',
  url: 'https://docs.monei.net',
  tagline: 'Explore our guides and examples to integrate MONEI',
  baseUrl: '/',
  favicon: 'https://static.monei.net/favicon.png',
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
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl')
    },
    algolia: {
      apiKey: '467829303523116db50a19af445924a9',
      indexName: 'monei-docs',
      appId: '0Q4XVEPSQ8', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    announcementBar: {
      id: 'warning',
      content:
        '<b>Warning!</b> Documentation is under construction and might change before the final release',
      backgroundColor: '#fa755a',
      textColor: '#FFFFFF'
    },
    navbar: {
      title: 'MONEI',
      hideOnScroll: false,
      logo: {
        alt: 'MONEI',
        src: 'https://static.monei.net/monei-logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right'
        },
        {
          href: 'https://monei.net/pricing',
          label: 'Pricing',
          position: 'right'
        },
        {
          href: 'https://monei.net/blog',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://support.monei.net',
          label: 'Support',
          position: 'right'
        },
        {
          href: 'https://dashboard.monei.net',
          label: 'Dashboard',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} MONEI Inc.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [path.resolve(__dirname, './inject-scripts.js')]
};
