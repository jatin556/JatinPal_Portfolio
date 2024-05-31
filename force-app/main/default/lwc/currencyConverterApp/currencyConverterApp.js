import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'GBP';
    amount = '';
    result;
    error;
    handleChange(event) {
        const {name, value} = event.target;
        console.log('name: ', name);
        console.log('value: ', value);
        this[name] = value;
        this.result = '';
        this.error = '';
    }

    submitHandler(event) {
        event.preventDefault();
        this.convert();
    }

    async convert() {
        const API_KEY = '2a2dc7275a792e89440470f6';
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`;

        try {
            const data = await fetch(API_URL);
            const jsonData = await data.json();
            console.log(jsonData);
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2);
            console.log('Amount: ', typeof this.amount);
            console.log('Amount: ', typeof Number(this.amount));
            console.log('Conversion Rate: ', jsonData.conversion_rate);
            console.log('Conversion Rate: ', typeof jsonData.conversion_rate);
            console.log(this.result);
        } catch (error) {
            console.log(error);
            this.error = 'Some error has occured, please try again later!';
        }
    }
}