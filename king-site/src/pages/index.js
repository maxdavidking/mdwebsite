import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const H1 = styled.h1`
  font-family: Rubik;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
