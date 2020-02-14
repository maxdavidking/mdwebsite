import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Layout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
