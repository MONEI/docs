module.exports = {
  title: 'MONEI Documentation',
  url: 'https://docs.monei.net',
  tagline: 'Explore our guides and examples to integrate MONEI',
  baseUrl: '/',
  favicon: 'https://static.monei.net/favicon.png',
  themeConfig: {
    disableDarkMode: true,
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl')
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'MONEI',
        src: 'https://static.monei.net/monei-logo.svg'
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation'
        },
        {
          href: 'https://monei.net/pricing',
          label: 'Pricing'
        },
        {
          href: 'https://monei.net/blog',
          label: 'Blog'
        },
        {
          href: 'https://support.monei.net',
          label: 'Support'
        },
        {
          href: 'https://dashboard.monei.net',
          label: 'Dashboard →'
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
  plugins: ['@docusaurus/plugin-sitemap']
};
