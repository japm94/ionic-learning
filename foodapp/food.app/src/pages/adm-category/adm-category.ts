import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryModel } from '../../app/models/CategoryMondel';

@IonicPage()
@Component({
  selector: 'page-adm-category',
  templateUrl: 'adm-category.html',
})
export class AdmCategoryPage {

  category: CategoryModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    let _category = this.navParams.get('_category');
    
    if(_category){
      this.category = <CategoryModel>_category;
    } else {
      this.category = new CategoryModel();
    }
    
  }



}
