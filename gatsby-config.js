module.exports = {
  siteMetadata: {
    siteTitle: 'Webdev I',
    defaultTitle: 'Webdev I',
    siteTitleShort: 'Webdev I',
    siteDescription: 'Out of the box Gatsby Theme for creating documentation websites easily and quickly',
    siteUrl: 'https://rocketdocs.netlify.app',
    siteAuthor: '@rocketseat',
    siteImage: '/banner.png',
    siteLanguage: 'en',
    themeColor: '#8257E6',
    basePath: '/'
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Webdev I',
        short_name: 'Webdev I',
        start_url: '/',
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'static/favicon.png'
      }
    },
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://rocketdocs.netlify.app'
      }
    },
    {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_blank',
        rel: 'noopener'
      }
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-offline'
  ]
}
