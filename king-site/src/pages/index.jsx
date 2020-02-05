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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>Max King</Header>
    <Body>
      Full Stack Developer at CNYCN in New York City. Interested in Running and Strava&#39;s API.
    </Body>
  </Layout>
);

export default IndexPage;
