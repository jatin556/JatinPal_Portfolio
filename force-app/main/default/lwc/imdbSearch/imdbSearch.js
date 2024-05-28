import { LightningElement } from 'lwc';

export default class ImdbSearch extends LightningElement {
    movieName = '';

    handleOnMovieData(event) {
        this.movieName = event.detail;
        console.log('from imdb search: '+this.movieName);
    };
}