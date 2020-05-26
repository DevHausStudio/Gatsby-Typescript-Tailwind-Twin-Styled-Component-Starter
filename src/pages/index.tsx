import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import {
  GatsbyIcon,
  TailwindIcon,
  StyledComponentsIcon,
  TypescriptIcon,
  GithubIcon,
  TwinIcon
} from '../components';
import Theme from '../components/theme';
import Button from '../components/Button';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 64px;
  }
`;

const Footer = styled.footer`
  ${tw`flex justify-center`}
  svg {
    width: 30px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const Index = () => (
  <Theme>
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: #542c85;
        `
      ]}
    >
      <Wrapper>
        <Main>
          <Logos>
            <GatsbyIcon />
            <TypescriptIcon />
            <StyledComponentsIcon />
            <TailwindIcon />
            <TwinIcon />
          </Logos>
          <Heading>Hello, world!</Heading>
          <Text>
            Welcome to the Gatsby + Tailwind CSS + Styled-Components + Typescript Starter.
          </Text>
          <div className="flex justify-between">
            <Button isPrimary>Primary</Button>
            <Button isSecondary>Secondary</Button>
            <Button isPrimary isSmall>
              Small Primary
            </Button>
            <Button isSecondary isSmall>
              Small Secondary
            </Button>
          </div>
          <Footer>
            <a
              href="https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </Footer>
        </Main>
      </Wrapper>
    </div>
  </Theme>
);

export default Index;
