module.exports = {
  siteMetadata: {
    siteTitle: 'Webdev I',
    defaultTitle: 'Webdev I',
    siteTitleShort: 'Webdev I',
    siteDescription:
      'Website da disciplina de Programação para Internet I do curso de ADS do IFPI Campus Picos',
    siteUrl: 'https://webdev-i.netlify.app',
    siteAuthor: '@jesielviana',
    siteImage: '/banner.png',
    siteLanguage: 'pt-br',
    themeColor: '#ffffff',
    basePath: '/'
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/jesielviana/webdev-i',
        baseDir: '/'
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

    'gatsby-plugin-dark-mode',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            }
          }
        ]
      }
    }
  ]
}
