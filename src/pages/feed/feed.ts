import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider,
  ]
})
export class FeedPage {

  public movies_list = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  openDetail(movie) {
    console.log(movie)
    this.navCtrl.push(MovieDetailPage, { id: movie.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadingMovies(true);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadingMovies(newpage: boolean = false) {
    this.presentLoading();
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        if (newpage) {
          this.movies_list = this.movies_list.concat(response.results);
          console.log(this.movies_list);
          this.infiniteScroll.complete(); 
        } else {
          this.movies_list = response.results;
          console.log(response.results)
        }

        this.closeLoading();
      },
      error => {
        console.log(error)
        this.closeLoading();
      }
    )
  }

  ionViewDidEnter() {
    this.loadingMovies();
  }

}
