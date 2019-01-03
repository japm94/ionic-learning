import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  managerCategory():void{
    this.navCtrl.push('AdmCategoriesPage');
  }

  openProduct(): void {
    this.navCtrl.setRoot('TabsPage');
  }

}
