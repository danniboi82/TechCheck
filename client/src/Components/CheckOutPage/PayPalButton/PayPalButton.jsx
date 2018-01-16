import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

 
export default class PayPalButton extends Component {
    render() {
        const client = {
            sandbox:    'access_token$sandbox$jhj9j3nyvsqckspr$cae9c8326b09b9d92e5b1c3bb1e4a758',
            production: 'YOUR-PRODUCTION-APP-ID',
        }	
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
}    