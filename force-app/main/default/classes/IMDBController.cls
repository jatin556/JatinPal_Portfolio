public with sharing class IMDBController {
    @AuraEnabled(cacheable=true)
    public static string getMovies(String movieName){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:IMDBAPI/imdb/imdbSearchByName?query='+movieName);
        request.setMethod('GET');

        Http http = new Http();

        HttpResponse response = http.send(request);
        System.debug('Status Code: '+response.getStatusCode());
        System.debug('Body: '+response.getBody());
        System.debug('Body: '+response.getStatus());

        if(response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            return 'Error Code: '+response.getStatusCode();
        }
    }

    @AuraEnabled(cacheable=true)
    public static string getMoviesById(String movieId){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:IMDBAPI/imdb/imdbSearchById?movieId='+movieId);
        request.setMethod('GET');

        Http http = new Http();

        HttpResponse response = http.send(request);
        System.debug('Status Code: '+response.getStatusCode());
        System.debug('Body: '+response.getBody());
        System.debug('Body: '+response.getStatus());

        if(response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            return 'Error Code: '+response.getStatusCode();
        }
    }
}