import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies(page = 1) {
    console.log(page);
    return this.http.get(this.baseApiPath + `/movie/popular?api_key=` + this.getApiKey() + `&page=${page}`);
  }

  getMovieDetails(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey());
  }

  getApiKey(): string {

    return "<< API KEY >>";

  }

}
