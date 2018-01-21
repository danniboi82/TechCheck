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
        fontSize: '20px',
        color: 'black',
        padding: '50px 0',
        backgroundColor: 'white'
    }
};

const missionStatement = () => {
    return (
        <div>
            <Subheader style={styles.subheader}>Our goal is to create a safe and reliable marketplace for buyers and sellers to exchange pc hardware and other electronics. As PC enthusiasts, we are familiar with the worries and hassles that accompany buying from second hand sellers on the internet. From receiving defective hardware to filing reports, it can be stressful on both parties.  With TechCheck, we aim to resolve those worries and allow you to improve your PC experience with whatever parts you need, at the best prices and no hassle. </Subheader>
            <Paper style={styles.paper} zDepth={5} rounded={false} value="We are committed to offering buyers and sellers an enjoyable consumer experience with our easy-to-use interface. Buy and sell with no worries, as we test and verify all items upon purchase, ensuring both parties a hassle free transaction.">Convenience</Paper>
            <Paper style={styles.paper} zDepth={5} rounded={false}>Competitive Pricing</Paper>
            <Paper style={styles.paper} zDepth={5} rounded={false}>Reliable</Paper>
        </div>
    )
}

export default missionStatement;