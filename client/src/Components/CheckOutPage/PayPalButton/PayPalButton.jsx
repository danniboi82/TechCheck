import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

 
export default class PayPalButton extends Component {
    render() {

        const env='sandbox';
        const commit= true;
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            		console.log("The payment was succeeded!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }		
        
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }	
        
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			
        }			
        const client = {
            sandbox:    'AS22L9LSQEHf5qIrXJb1GzdfAuoTJU0hur17e7LXfHBsrZrMxyJVZhzr8NIKjYVAa9wmf8DP839GHVWp',
            production: 'YOUR-PRODUCTION-APP-ID',
        }	
        return (
            <PaypalExpressBtn 
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel} commit={commit} env={env} client={client} currency={'USD'} total={1.00} />
        );
    }
}    