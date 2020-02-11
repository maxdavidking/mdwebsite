import React from 'react';
import styled, { keyframes } from 'styled-components';
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

  :hover {
    color: #FF0032;
  }
`;

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-900px);
  }
  100% {
    transform: translateX(0);
  }
`;

const ImageContainer = styled.div`
  width: 40%;

  .computer {
    animation: ${slideInFromTop} 0.5s ease-in-out;
  }

  .keyboard {
    animation: ${slideInFromTop} 1s ease-in-out;
  }

  .computer-mouse {
    animation: ${slideInFromTop} 1s ease-in-out;
  }

  .coffee-mug {
    animation: ${slideInFromTop} 1.5s ease-in-out;
  }

  @media (max-width: 786px) {
    width: 75%;
  }
`;

const Contact = styled.a`
  text-decoration: underline;
  color: #FF0032;
  padding: 2em;
  font-size: 2rem;

  :hover {
    color: #000000;
  }
`;

const ComputerSVG = (
  <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1186.4 662.8" style={{ enableBackground: 'new 0 0 1186.4 662.8' }} xmlSpace="preserve">
    <g className="computer">
      <polygon style={{ fill: '#888889' }} points="548.7,548.3 544.4,575.1 643.1,575.1 637.8,548.3" />
      <polyline style={{ fill: '#767677' }} points="548.4,555.7 547.6,561.7 639.5,561.7 638.4,554.7 548.9,554.7" />
      <path style={{ fill: '#E5E9ED' }} d="M768.1,556.4H419.5c-6.8,0-12.3-5.3-12.3-11.8V285.1c0-6.5,5.5-11.8,12.3-11.8h348.5c6.8,0,12.3,5.3,12.3,11.8v259.4C780.4,551.1,774.9,556.4,768.1,556.4z" />
      <path style={{ fill: '#202021' }} d="M770.8,510.3H413c-3.2,0-5.8-2.6-5.8-5.8V284.2c0-6.1,4.9-11,11-11h350.6c6.4,0,11.7,5.2,11.7,11.7v215.8C780.4,506,776.1,510.3,770.8,510.3z" />
      <rect x="423.3" y="286.1" style={{ fill: '#434445' }} width="341" height="211.3" />
      <path style={{ fill: '#C7C6C6' }} d="M518.9,596.3l1,5.6c0.2,1.3,1.3,2.2,2.6,2.2h138.2c2.9,0,5.4-2.1,5.9-4.9l0-0.1c0.2-1-0.6-1.8-1.5-1.8L518.9,596.3z" />
      <path style={{ fill: '#A3A3A2' }} d="M544.1,575.1l-25.4,20.3c-1.3,1.1-0.6,3.3,1.2,3.3l145.5-0.4c1.1,0,1.6-1.3,0.8-2l-23.8-21.2H544.1z" />
      <path style={{ fill: '#A3A3A2' }} d="M545.5,574l-0.6,1.3c-1,1-1.4,1.3-2,1.9l-4.7,3.7l109.2,0.4l-3-3.1c-0.4-0.4-0.9-0.8-1.2-1.2c-0.7-0.8-0.7-0.6-1.1-1.7l0-1.3H545.5z" />
      <path style={{ fill: '#A3A3A2' }} d="M521.8,601.8c0.3,0.6,1.2,1.8,2,1.8h135.7c0.5,0,1.1-0.1,1.6-0.2c0.5-0.2,1.2-1.2,1.8-1.6H521.8z" />
      <circle style={{ fill: '#5FBB46' }} cx="593.8" cy="280.6" r="1.3" />
      <path style={{ fill: '#2D2D2D' }} d="M589.7,275.5L423.6,278c0,0-9.7,0.9-10.9,10.3c-1.2,9.4-1.9,118.4-3.4,138.9s0-138.9,0-138.9s-1.9-13.4,14.2-13.1L589.7,275.5z" />
      <path style={{ fill: '#2D2D2D' }} d="M597.2,275.5l166.1,2.5c0,0,9.7,0.9,10.9,10.3c1.2,9.4,1.9,118.4,3.4,138.9c1.5,20.5,0-138.9,0-138.9s1.9-13.4-14.2-13.1L597.2,275.5z" />
      <path style={{ fill: '#CED1D3' }} d="M763.9,555.4H422.6c-10.5,1-14.1-5.4-14.2-8.6l0,0c1.4,0.4,2.9,0.6,4.4,0.6l358.8,1.6c2.5,0,4.9-0.4,7.2-1.3l0,0C777.7,551.1,775.2,556.4,763.9,555.4z" />
    </g>
    <g className="keyboard">
      <path style={{ fill: '#E5E9ED' }} d="M692.9,606.8H363.5V602c0-4,3.2-7.2,7.2-7.2h315c4,0,7.3,3.3,7.3,7.3V606.8z" />
      <polygon style={{ fill: '#D2D6D8' }} points="692,605.9 364.3,605.9 364.4,602.6 692.1,602.6" />
      <rect x="376.7" y="593" width="21.4" height="1.9" />
      <rect x="492.8" y="592.9" width="95.4" height="1.9" />
      <rect x="399.6" y="593" width="21.4" height="1.9" />
      <rect x="422.8" y="593" width="21.4" height="1.9" />
      <rect x="469.8" y="593" width="21.4" height="1.9" />
      <rect x="445.9" y="593" width="21.4" height="1.9" />
      <rect x="590.3" y="592.9" width="21.4" height="1.9" />
      <rect x="613.2" y="592.9" width="21.4" height="1.9" />
      <rect x="636.3" y="592.9" width="21.4" height="1.9" />
      <rect x="659.5" y="592.9" width="21.4" height="1.9" />
      <path style={{ fill: '#FFFFFF' }} d="M397.1,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M419.9,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M443.1,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M466.3,593.9H447v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M610.7,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M633.5,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M656.7,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M679.9,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M490.1,593.9h-19.3v-2.1c0-0.6,1-1.2,2.3-1.2h14.6c1.3,0,2.4,0.5,2.4,1.2V593.9z" />
      <path style={{ fill: '#FFFFFF' }} d="M587.1,594h-93.6v-2.1c0-0.7,5-1.2,11.2-1.2h70.9c6.3,0,11.5,0.5,11.5,1.2V594z" />
    </g>
    <g className="computer-mouse">
      <path style={{ fill: '#E5E9ED' }} d="M724.1,606.7c0,0,0-8.6,12.9-14.3c8.7-3.9,18.7-4,27.5-0.6c6.8,2.6,13.7,7.2,13.7,15L724.1,606.7z" />
      <path style={{ fill: '#D1D4D6' }} d="M764.5,592.5c-3.9-1.4-9-2.6-13.3-2.4v15.7l26.1,0.1C777.2,601.6,773,595.6,764.5,592.5z" />
    </g>
    <g className="coffee-mug">
      <polyline style={{ fill: '#F9EFE5' }} points="849.8,516.5 865.1,606.8 908,606.8 922.4,516.5 853.7,516.5" />
      <polygon style={{ fill: '#F3E5D4' }} points="921.2,519.5 886.1,516.5 885.7,605.9 907.4,605.9" />
      <polygon style={{ fill: '#BE5532' }} points="853.3,546.7 859.7,581.7 912.8,581.7 918.9,546.7" />
      <polygon style={{ fill: '#AD4025' }} points="917.8,547.7 886.2,547.7 886.1,580.9 912.2,580.9" />
      <line style={{ fill: 'none' }} x1="858.3" y1="551.2" x2="914.7" y2="551.2" />
      <line style={{ fill: 'none' }} x1="860.1" y1="557.9" x2="913.7" y2="557.9" />
      <line style={{ fill: 'none' }} x1="861.1" y1="565.8" x2="911.6" y2="565.8" />
      <line style={{ fill: 'none' }} x1="862.1" y1="573.1" x2="910.5" y2="573.1" />
      <line style={{ fill: 'none' }} x1="862" y1="578.7" x2="909.5" y2="578.7" />
      <polygon style={{ fill: '#BE5532' }} points="845.3,524.5 926.2,524.5 926.2,516.5 849.8,516.5 845.3,516.5" />
      <polygon style={{ fill: '#BE5532' }} points="851.8,505.9 849.8,516.5 921.2,516.5 918.9,505.9" />
      <polygon style={{ fill: '#AD4025' }} points="925.2,517.5 920,517.5 886.7,517.5 886.7,523.6 925.2,523.8" />
      <polygon style={{ fill: '#AD4025' }} points="920,515.7 918.2,506.7 886.8,506.8 886.8,515.7" />
      <polygon style={{ fill: '#9B3021' }} points="850.9,515.7 851.2,513.7 919.6,513.7 920,515.7" />
    </g>
  </svg>
);

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <ImageContainer>
      {ComputerSVG}
    </ImageContainer>
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
    <Contact href="mailto:maxdavidking@gmail.com">
      maxdavidking[@]gmail.com
    </Contact>
  </Layout>
);

export default IndexPage;
