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

const DivingSVG = (
  <svg
    className="arches-svg-node"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    viewBox="0 0 552.7 62.1"
  >
    <path
      className="arches"
      fill="none"
      stroke="#ecf0f1"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M505,55c0-27.6-22.4-50-50-50s-50,22.4-50,50c0-27.6-22.4-50-50-50s-50,22.4-50,50c0-27.6-22.4-50-50-50s-50,22.4-50,50c0-27.6-22.4-50-50-50s-50,22.4-50,50c0-27.6-22.4-50-50-50S5,27.4,5,55"
    />
    <path
      className="splash-lines"
      fill="none"
      stroke="#ecf0f1"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M549.7,46.6l-21.8,12.6 M531.9,25.8l-12.6,21.8 M504.2,18.3v25.1 M476.4,25.8L489,47.6 M458.7,46.6l21.8,12.6"
    />
  </svg>
);

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <DivingSVG />
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
    </Body>
  </Layout>
);

export default IndexPage;
