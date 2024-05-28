import { LightningElement } from 'lwc';

export default class ImdbMovieSearchForm extends LightningElement {
    movieName = '';

    inputMovieHandler (event) {
        this.movieName = event.target.value;
    }

    searchButtonHandler () {
        console.log('From imdb movie search form: '+this.movieName);
        const eventData = new CustomEvent('movienamedata',{
            detail : this.movieName
        });
        this.dispatchEvent(eventData);
    };
}