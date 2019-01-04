import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { CategoryModel } from '../../app/models/CategoryMondel';
import { CameraProvider } from '../../providers/camera/camera';

@IonicPage()
@Component({
  selector: 'page-adm-category',
  templateUrl: 'adm-category.html',
})
export class AdmCategoryPage {

  category: CategoryModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private cameraProvider: CameraProvider) {

    let _category = this.navParams.get('_category');

    if (_category) {
      this.category = <CategoryModel>_category;
    } else {
      this.category = new CategoryModel();
    }

  }

  getPictureOption(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add Photo',
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            this.cameraProvider.takePicture(
              photo => {
                this.category.photo = photo;
              });
          },
          icon: this.platform.is('ios') ? null : 'camera'
        },
        {
          text: 'Take Photo from gallery',
          handler: () => {
            this.cameraProvider.getPictureFromGallery(
              photo => {
                this.category.photo = photo;
              });
          },
          icon: this.platform.is('ios') ? null : 'images'
        },
        {
          text:'Cancel',
          role:'destructive',
          handler: () => {

          },
          icon: this.platform.is('ios') ? null : 'close'
        }
      ]
    });

    actionSheet.present();
  }

}
