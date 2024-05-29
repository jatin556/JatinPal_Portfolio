import { LightningElement , api} from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label = '';
    @api uniqueId = '';
    @api options = [];

    selectOptionHandler(event) {
        console.log(this.label);
        console.log(event.target.value);
        this.callParent(event.target.value);
    }

    callParent(value) {
        this.dispatchEvent(new CustomEvent('selectedoption'), {
            detail : {
                label : this.label,
                value: value
            }
        });
    }
}