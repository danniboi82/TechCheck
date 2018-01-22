import React from 'react';
import './Header.css';
import { Col, Container, Row } from 'react-grid-system';


const header = () => {
    return (
        <div className='Header'>
            <Row>
                <Col sm={12}>

                    <p className='Header-p'>WELCOME TO TECHCHECK</p>

                </Col>
            </Row>
        </div>

    )
}

export default header;