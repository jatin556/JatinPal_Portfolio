import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';

export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmClockAssets + '/AlarmClockAssets/clock.png';
    currentTime='';
    hours = [];
    mins = [];
    ampm = ['AM', 'PM'];
    selectedHour;
    selectedMinute;
    selectedAMPM;

    connectedCallback() {
        this.hoursHandler();
        this.minutesHandler();
        this.currentTimeHandler();
    }

    currentTimeHandler() {
        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getHours();
            let min = dateTime.getMinutes();
            let sec = dateTime.getSeconds();
            let ampm = 'AM';

            if(hour === 0) {
                hour = 12;
                ampm = 'AM';
            } else if (hour === 12) {
                ampm = 'PM';
            } else if (hour >= 12) {
                hour = hour - 12;
                ampm = 'PM';
            }

            hour = hour < 10 ? '0' + hour : hour;
            min = min < 10 ? '0' + min : min;
            sec = sec < 10 ? '0' + sec : sec;

            this.currentTime = `${hour}:${min}:${sec} ${ampm}`;
        }, 1000)
    }

    hoursHandler() {
        for(let i=1; i<=12; i++) {
            let val = i < 10 ? `0${i}` : i;
            this.hours.push(val);
        }
    }

    minutesHandler() {
        for(let i=0; i<=59; i++) {
            let val = i < 10 ? `0${i}` : i;
            this.mins.push(val);
        }
    }

    selectedoption(event) {
        const {label, value} = event.detail;

        console.log('label ', label);

        if(label === 'Hour(s)') {
            this.selectedHour = value;
        } else if(label === 'Minute(s)') {
            this.selectedMinute = value;
        } else if(label === 'AM/PM') {
            this.selectedAMPM = value;
        }

        console.log("this.selectedHour: ", this.selectedHour);
        console.log("this.selectedMinute: ", this.selectedMinute);
        console.log("this.selectedAMPM: ", this.selectedAMPM);
    }
}