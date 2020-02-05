import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/globalStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Header = styled.h1`
`;

const Body = styled.p`
`;

const Link = styled.a`
  text-decoration: underline;
  color: black;
  padding: 0 0.2em;
`;

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <Header>Max King</Header>
    <Body>
      Full Stack Developer at
      <Link href="https://www.cnycn.org">
      CNYCN
      </Link>
      in New York City, and maker of
      <Link href="https://fakeUrl.com">
      Strava Buddy.
      </Link>
      &nbsp;
    </Body>
  </Layout>
);

export default IndexPage;
