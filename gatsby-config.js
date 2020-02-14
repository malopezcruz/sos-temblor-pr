/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * See https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=manifest
 */
const website = require('./website-config.js');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: website.title,
    siteUrl: website.siteUrl,
    description: website.description,
    lang: website.lang,
    locale: website.locale,
    tagline: website.tagline,
    companyName: website.companyName,
    author: website.author,
    sitePublished: website.sitePublished,
    policyDate: website.policyDate,

    address: {
      street: website.address.street,
      town: website.address.town,
      state: website.address.state,
      zipcode: website.address.zipcode,
    },

    phoneNumber: website.phoneNumber,
    email: website.email,
    whatsAppNumber: website.whatsAppNumber,
    messangerUser: website.googleAnalytics,

    socialMedia: {
      facebookUser: website.socialMedia.facebookUser,
      googleMyBusiness: website.socialMedia.googleMyBusiness,
      instagramUser: website.socialMedia.instagramUser,
      twitterUser: website.socialMedia.twitterUser,
      youTubeUser: website.socialMedia.youTubeUser,
    },

    googleAnalytics: website.googleAnalytics,
    googleSiteVerification: website.googleSiteVerification,
    msSiteVerification: website.msSiteVerification,

    favicon: website.favicon,
    shortName: website.shortName,
    themeColor: website.themeColor,
    backgroundColor: website.backgroundColor,

    // Additional field for schema.org
    siteType: website.siteType,
    siteId: website.siteId,
    siteLogo: website.siteLogo,
    siteImage: website.siteImage,
    longitude: website.longitude,
    latitude: website.latitude,
    hasMap: website.hasMap,
    dayOfWeek: website.dayOfWeek,
    opens: website.opens,
    closes: website.closes,
    sameAs: [
      `https://www.facebook.com/${website.socialMedia.facebookUser}`,
      `http://www.twitter.com/${website.socialMedia.instagramUser}`,
      `http://www.instagram.com/${website.socialMedia.twitterUser}`,
    ],

    //Theme
    globalStyle: website.globalStyle,
    primaryColor: website.primaryColor,
    navType: website.navType,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: website.siteUrl,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: [
          'text-gray-900',
          'antialiased',
          'text-purple-800',
          'body',
          'bg-gray-700',
          'bg-purple-700',
          'bg-indigo-700',
          'bg-teal-700',
          'bg-green-700',
          'bg-blue-700',
          'bg-red-700',
          'bg-yellow-700',
          'bg-pink-700',
          'bg-orange-700',
        ], // Don't remove this selector
        ignore: ['fontawesome-svg-core/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalytics,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'sossur.netlify.com',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ['/category/*', `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
      },
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: '1M7XDY6qY8BHuaW4L5pWmr2zYKj_WBPBut3XtxrVqUZo',

        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        spreadsheetName: 'MySheet',

        // The `typePrefix` is optional, default value is 'GoogleSpreadsheet'
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: 'GoogleSpreadsheet',

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: '<your service account email address>',
        //   private_key: '<the prive key for your service account>'
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        credentials: {
          type: 'service_account',
          project_id: 'sostemblorsur',
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          client_email: 'sossheet@sostemblorsur.iam.gserviceaccount.com',
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/sossheet%40sostemblorsur.iam.gserviceaccount.com`,
        },

        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd, D MMMM YYYY - h:mm A [GMT]Z', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        locale: 'es', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: ['/'],
        excludePaths: [],
        height: 4,
        prependToBody: false,
        color: `#2b6cb0`,
      },
    },
  ],
};
