import {Component} from '@angular/core';
import { MoviesServices } from '../movies/movies.service';
import { ShowsServices } from '../shows/shows.service';

@Component({
    selector: 'pm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent{
    topMovieUrl: string;
    topShowUrl: string;

    constructor(private moviesService: MoviesServices, private showsService: ShowsServices){
        this.moviesService.getShows().subscribe(moviesObserved => {
            var movies = moviesObserved["results"];
            var temp = movies[0].poster_path;
            this.topMovieUrl = "https://image.tmdb.org/t/p/w200/" + temp;
        })
 
        this.showsService.getShows().subscribe(showsObserved => {
            var shows = showsObserved["results"];
            var temp2 = shows[0].poster_path;
            this.topShowUrl = "https://image.tmdb.org/t/p/w200/" + temp2;
            console.log(this.topShowUrl);
        })
    }
}