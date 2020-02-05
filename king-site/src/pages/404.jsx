import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/globalStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Header = styled.h1`
`;

const Body = styled.p`
`;

const NotFoundPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="404: Not found" />
    <Header>NOT FOUND</Header>
    <Body>
      You just hit a route that doesn&#39;t exist...
      Which is impressive considering this is a one page site
    </Body>
  </Layout>
);

export default NotFoundPage;
