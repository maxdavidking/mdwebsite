import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Header = styled.h1`
  font-family: Rubik;
  font-weight: 700;
  line-height: 1.4;
  color: #FF0032;
`;

const Body = styled.p`
  font-family: Rubik;
  font-weight: 400;
  line-height: 1.4;
  color: #000000;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>NOT FOUND</Header>
    <Body>You just hit a route that doesn&#39;t exist... the sadness.</Body>
  </Layout>
);

export default NotFoundPage;
