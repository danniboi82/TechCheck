import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

 
export default class PayPalButton extends Component {
    render() {
        const client = {
            sandbox:    'XXXXXXXXXX',
            production: 'YOUR-PRODUCTION-APP-ID',
        }	
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
}    