const dotenv = require("dotenv");
const path = require("path");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: `Dee Gmiterko – Artist, Coder, Me`,
    description: `Digital nomad exploring the world and creating stuff. Join me and get to know me along the way.`,
    author: `Dominik Gmiterko`,
    siteUrl: `https://deegmiterko.com/`,
    keywords: ['Dominik Gmiterko', 'Dominik', 'Gmiterko', 'artist', 'coder', 'me', 'digital nomad', 'goals', 'project', 'programming', 'create', 'generative design'],
    tagline: "Coder | Artist | Me",
    announcement: {
      title: '',// "I'm into generative design",
      link: '',//"https://deegmiterko.com/generative-design",
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `src`, `content`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `@deegmiterko/gatsby-transformer-chat-parse`,
      options: {
        users: [
          {
            name: 'Me',
            color: '#863648',
          },
          {
            name: 'You',
            color: '#a6a6a8',
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dee Gmiterko`,
        short_name: `Dee Gmiterko`,
        start_url: `/`,
        background_color: `#38174A`,
        theme_color: `#E0C65D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-facebook-multi-pixels`,
      options: [
        {
          dev: false,
          alias: 'main-pixel',
          pixelId: '928689911405331',
          viewContent: true,
          pageView: true,
        },
      ],
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-M9GYEZ2DVM",
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages
        },
        resolveSiteUrl: ({site}) => site.siteMetadata.siteUrl,
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      }
    }
  ],
}
