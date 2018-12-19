import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public objeto_feed = {
    titulo: "Marty McFly",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhh...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public photos_list = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoProvider: PhotoProvider,
  ) {
  }

  ionViewDidLoad() {
    this.photoProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        this.photos_list = response.data
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
