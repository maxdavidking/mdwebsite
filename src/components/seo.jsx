import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title="Max King's Personal Website"
      meta={[
        {
          name: 'description',
          content: "This is Max King's personal website"
        },
        {
          name: 'description',
          content: "This is Max King's personal website"
        },
        {
          property: 'og:title',
          content: "Max King's Personal Website"
        },
        {
          property: 'og:description',
          content: "This is Max King's personal website"
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: "Max King's Personal Website"
        },
        {
          name: 'twitter:description',
          content: "This is Max King's personal website"
        }
      ].concat(meta)}
    >
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
