import {Component} from '@angular/core';
import { IMovies } from './movies';
import { MoviesServices } from './movies.service';

@Component({
    selector: 'pm-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent{
    movies: IMovies[] = [];
    constructor(private showsService: MoviesServices){
        this.showsService.getShows().subscribe(moviesObserved => {
            this.movies = moviesObserved["results"];
            this.movies.forEach(element => {
                var temp = element["poster_path"];
                element.posterPath = "https://image.tmdb.org/t/p/w200/" + temp;
                element.name = element["original_title"];
                element.overview = element["overview"];
                element.airDate = this.getDate(element["release_date"]);
            });
        })
    }
    getDate(theDate) {
        var date = new Date(theDate);
        var month = date.toLocaleString('default', {
            month: 'long'
        });
        var day = date.getDate() + 1;
        var year = date.getFullYear();
        var d = month + ' ' + day + ', ' + year;
        return d;
    }
}