import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-color: yellow;
  bottom: 0;
  left: 0;
  padding: 24px;
  color: rgba(0, 0, 0, 0.4);
`;

const Copyright = styled.span`
  padding-right: 0.5em;
`;

const Separator = styled.span`
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const footer = () => {
    return (
        <div>
            <Container>
                <Copyright css="padding-right: 0.5em"><b>&copy; 2017</b></Copyright>
                <ExtLink href="/">TECHTRONIX</ExtLink>
                <Separator>|</Separator>
                <ExtLink href="/privacy">Privacy Policy</ExtLink>
            </Container>
        </div>
    );
}

export default footer;