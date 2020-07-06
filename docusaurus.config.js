module.exports = {
  title: 'MONEI Documentation',
  tagline: 'Explore our guides and examples to integrate MONEI',
  url: 'https://docs.monei.net',
  baseUrl: '/',
  favicon: 'https://static.monei.net/favicon.png',
  themeConfig: {
    disableDarkMode: true,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl')
    },
    navbar: {
      logo: {
        alt: 'MONEI',
        src: 'https://static.monei.net/monei-logo.svg'
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
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
          homePageId: 'hosted-payment-page',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
