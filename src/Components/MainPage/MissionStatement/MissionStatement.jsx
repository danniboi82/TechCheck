import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const styles = {
    paper: {
        height: 250,
        width: 250,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    subheader: {
        fontSize: '50px',
        color: 'black',
        padding: '50px 0',
        backgroundColor: 'green'
    }
};

const missionStatement = () => {
    return (
        <div>
            <Subheader style={styles.subheader}>Mission Statement</Subheader>
            <Paper style={styles.paper} zDepth={5} rounded={false}>Large Selection</Paper>
            <Paper style={styles.paper} zDepth={5} rounded={false}>Competitive Pricing</Paper>
            <Paper style={styles.paper} zDepth={5} rounded={false}>Reliable</Paper>
        </div>
    )
}

export default missionStatement;