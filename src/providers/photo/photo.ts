import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotoProvider Provider');
  }

  getPopularMovies(){
    return this.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=<<INSTA TOKEN>>");
  }

}
