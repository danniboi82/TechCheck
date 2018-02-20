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
    state = {
                desktop: 1,
                laptop: 1,
                harddrive: 1,
                graphics: 1, 
                peripherals: 1,
            };
    
  handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div style={{backgroundColor: 'gray'}}>
                <DropDownMenu
                    value={this.state.desktop}
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
                    value={this.state.laptop}
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
                    value={this.state.harddrive}
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
                    value={this.state.graphics}
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
                    value={this.state.peripherals}
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