import {IMovies} from './movies';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class MoviesServices{
    constructor(private http: HttpClient) { }
    showsUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=97896d0994e397395bead17e1a768ddb&language=en-US&page=1";
    getShows(): Observable<IMovies[]>{
        return this.http.get<IMovies[]>(this.showsUrl);
    }
}