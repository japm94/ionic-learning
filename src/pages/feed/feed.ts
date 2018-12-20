import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';

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
    PhotoProvider,
  ]
})
export class FeedPage {

  public photos_list = new Array<any>();
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoProvider: PhotoProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.photoProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        this.photos_list = response.data
        console.log(response.data);
        this.closeLoading();
      },
      error => {
        console.log(error);
        this.closeLoading();
      }
    )
  }

}
