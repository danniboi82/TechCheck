import React from 'react';
import styled from 'styled-components';
import './Footer.css'
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';


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
    <div style={{backgroundColor: '#009B77'}}>
      <Container >
        <Row className='FooterRowOne'>
          <Col sm={4} style={{ display: 'inline-block', margin: 'auto'}}>

            <div><Link to='/'><FlatButton> Home </FlatButton></Link></div>          
            <div><Link to='/registration'><FlatButton>  Registration</FlatButton> </Link> </div>
            <div><Link to='/check_out'><FlatButton>Check Out</FlatButton></Link></div>
          </Col>
          <Col sm={4}>
            <img src="https://i.imgur.com/heRuT1H.png" alt="TClogo" style={{ margin: '35px auto auto auto', maxWidth: '100%' }} />
          </Col>
          <Col sm={4}>
            <div className="footer-icons">
              <ExtLink href="#"><i className="fa fa-facebook fa-2x"></i></ExtLink>
              <ExtLink href="#"><i className="fa fa-twitter fa-2x"></i></ExtLink>
              <ExtLink href="#"><i className="fa fa-linkedin fa-2x"></i></ExtLink>
              <ExtLink href="#"><i className="fa fa-github fa-2x"></i></ExtLink>
            </div>
          </Col>
        </Row>
        <Row style={{padding: '15px 0px'}}>
          <Col sm={12}>
            <Copyright css="padding-right: 0.5em"><b>&copy; 2017</b></Copyright>
            <ExtLink href="/">TechCheck</ExtLink>
            <Separator>|</Separator>
            <ExtLink href="/privacy">Privacy Policy</ExtLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default footer;