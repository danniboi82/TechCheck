import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: '20%',
        color: 'black',
        backgroundColor: 'gray'
    },
};



class categoryBar extends Component {
    state = {value: 1};
    
  handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div style={{backgroundColor: 'gray'}}>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="Desktop" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="LapTops" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="HardDrives" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="Graphics" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="Peripherals" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
            </div>
        );
    };
};

export default categoryBar;