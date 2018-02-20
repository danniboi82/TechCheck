import React,{Component} from 'react';
import './Header.css';
import { Col,  Row } from 'react-grid-system';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class header extends Component {
    state={
        open:false
    }
    handleToggle = () => this.setState({open: !this.state.open});
    render(){
    return (<div>
        {/* <button label="Toggle Drawer"
          onClick={this.handleToggle}>open</button> */}
          <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div className='Header'>
            <Row>
                <Col sm={12}>

                    <p className='Header-p'>WELCOME TO TECHCHECK</p>

                </Col>
            </Row>
        </div>
</div>
    )
}
}

export default header;