import React,{Component} from 'react';
import './Header.css';
import { Col,  Row } from 'react-grid-system';

class header extends Component {
    state={
        open:false
    }
  
    render(){
    return (
    <div>
     
        <div onClick={this.handleclose} className='Header'>
            <Row>
                <Col  sm={10}>

                    <p className='Header-p'>WELCOME TO TECHCHECK</p>

                </Col>
            </Row>
        </div>
</div>
    )
}
}

export default header;