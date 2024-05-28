import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmi = ''
    result = ''

    inputHandler(event) {
        const {name, value} = event.target;
        if(name === 'height'){
            this.height = value;
        }
        if(name === 'weight'){
            this.weight = value;
        }
    }

    submitHandler(event) {
        event.preventDefault();
        this.calulateBmi();
    }

    calulateBmi() {
        let height = Number (this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        console.log(bmi);
        this.bmi = Number (bmi.toFixed(2));

        if(this.bmi <=18.5) {
            this.result = 'Únderweight';
        } else if(this.bmi > 18.5 && this.bmi <25) {
            this.result = 'Healthy';
        } else if(this.bmi > 25 && this.bmi <30) {
            this.result = 'Overweight';
        } else {
            this.result = 'Obese';
        }

        console.log('BMI: ' + this.bmi);
        console.log('Result: ' + this.result);
    }

    recalculate() {
        this.height = ''
        this.weight = ''
        this.bmi = ''
        this.result = ''
    }
}