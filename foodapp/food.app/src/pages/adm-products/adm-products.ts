import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-products',
  templateUrl: 'adm-products.html',
})
export class AdmProductsPage {

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

  addOrEdit(model?: CategoryModel): void {
    this.navCtrl.push('AdmCategoryPage', { _category: model });
  }

  
}
