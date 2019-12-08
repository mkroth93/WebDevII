import {IShows} from './shows';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ShowsServices{
    constructor(private http: HttpClient) { }
    showsUrl = "https://api.themoviedb.org/3/tv/popular?api_key=97896d0994e397395bead17e1a768ddb&language=en-US&page=1";
    getShows(): Observable<IShows[]>{
        return this.http.get<IShows[]>(this.showsUrl);
    }
}