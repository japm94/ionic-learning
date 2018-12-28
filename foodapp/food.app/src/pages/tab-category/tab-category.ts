import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the TabCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-category',
  templateUrl: 'tab-category.html',
})
export class TabCategoryPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app:App
    ) {
  }

  ionViewDidLoad() {
    this.app.getRootNav().setRoot(CategoryPage);
  }
}
