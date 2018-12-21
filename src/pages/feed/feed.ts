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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  openDetail(movie){
    console.log(movie)
    this.navCtrl.push(MovieDetailPage, { id: movie.id });
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

  ionViewDidEnter() {
    this.presentLoading();
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        this.movies_list = response.results;
        console.log(response.results)
        this.closeLoading();
      },
      error => {
        console.log(error)
        this.closeLoading();
      }
    )
  }

}
