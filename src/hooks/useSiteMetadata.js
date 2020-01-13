import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            tagline
            lang
            locale
            sitePublished
            policyDate
            companyName
            googleAnalytics
            googleSiteVerification
            msSiteVerification
            siteType
            siteId
            latitude
            longitude
            phoneNumber
            email
            siteLogo
            siteImage
            address {
              street
              town
              state
              zipcode
            }
            hasMap
            sameAs
            socialMedia {
              facebookUser
              googleMyBusiness
              instagramUser
              twitterUser
              youTubeUser
            }
            dayOfWeek
            opens
            closes
            globalStyle
            primaryColor
            themeColor
            navType
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
