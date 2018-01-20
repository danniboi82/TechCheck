import React from 'react';
import styled from 'styled-components';
import './Footer.css'

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
        <div className="footer-icons">
          <ExtLink href="#"><i className="fa fa-facebook fa-3x"></i></ExtLink>
          <ExtLink href="#"><i className="fa fa-twitter fa-3x"></i></ExtLink>
          <ExtLink href="#"><i className="fa fa-linkedin fa-3x"></i></ExtLink>
          <ExtLink href="#"><i className="fa fa-github fa-3x"></i></ExtLink>
        </div>
        <Copyright css="padding-right: 0.5em"><b>&copy; 2017</b></Copyright>
        <ExtLink href="/">TechCheck</ExtLink>
        <Separator>|</Separator>
        <ExtLink href="/privacy">Privacy Policy</ExtLink>
      </Container>
    </div>
  );
}

export default footer;