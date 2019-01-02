import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryModel } from '../../app/models/CategoryMondel';
import { CategoryProvider } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-adm-category',
  templateUrl: 'adm-category.html',
})
export class AdmCategoryPage {

  list: Array<CategoryModel> = new Array<CategoryModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoryProvider: CategoryProvider
  ) {

    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let result = await this.categoryProvider.get();
    if (result.success) {
      this.list = <Array<CategoryModel>>result.data;
    }
  }

}
