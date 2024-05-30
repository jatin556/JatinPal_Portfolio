import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'GBP';
    handleChange(event) {
        const {name, value} = event.target;
        console.log('name: ', name);
        console.log('value: ', value);
        this[name] = value;
    }
}