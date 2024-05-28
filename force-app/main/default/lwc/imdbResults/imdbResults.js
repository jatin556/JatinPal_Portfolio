import { LightningElement, api, wire } from 'lwc';
import getMovies from '@salesforce/apex/IMDBController.getMovies';

export default class ImdbResults extends LightningElement {
    @api movieName;
    movieList=[];

    @wire(getMovies, {movieName : '$movieName'})
    wiredData({error, data}) {
        if(data) {
            let movieData = JSON.parse(data);
            this.movieList = movieData.success ? movieData.result : [];
        } else if (error) {
            console.log('Error : '+ JSON.stringify(error));
        }
    }

}