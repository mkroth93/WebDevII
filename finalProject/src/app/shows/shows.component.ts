import {Component} from '@angular/core';
import { IShows } from './shows';
import { ShowsServices } from './shows.service';

@Component({
    selector: 'pm-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.css']
})

export class ShowsComponent{
    shows: IShows[] = [];
    constructor(private showsService: ShowsServices){
        this.showsService.getShows().subscribe(showsObserved => {
            this.shows = showsObserved["results"];
            this.shows.forEach(element => {
                var temp = element["poster_path"];
                element.posterPath = "https://image.tmdb.org/t/p/w200/" + temp;
                element.name = element["name"];
                element.overview = element["overview"];
                element.airDate = this.getDate(element["first_air_date"]);
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