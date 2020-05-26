import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { CategoryModel } from '../../app/models/CategoryMondel';
import { CameraProvider } from '../../providers/camera/camera';
import { CategoryProvider } from '../../providers/category/category';
import { AlertProvider } from '../../providers/alert/alert';

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
    private cameraProvider: CameraProvider,
    private categoryProvider: CategoryProvider,
    private alertProvider: AlertProvider) {

    let _category = this.navParams.get('_category');

    if (_category) {
      this.category = <CategoryModel>_category;
    } else {
      this.category = new CategoryModel();
    }

  }

  async saveCategory(): Promise<void> {
    let success = false;

    if (!this.category._id) {
      let registerResult = await this.categoryProvider.post(this.category);
      success = registerResult.success;
    } else {
      let updateCategory = await this.categoryProvider.put(this.category._id, this.category);
      success = updateCategory.success;
    }
    if (success) {
      this.alertProvider.toast('Successful registration', 'bottom');
      this.navCtrl.setRoot('AdmCategoriesPage');
    }
  }

  async deleteCategory(): Promise<void> {
    try {
      this.alertProvider.confirm('Delete?', `Do you want delete ${this.category.title}?`,
        async () => {
          let deleteResult = await this.categoryProvider.delete(this.category._id);
          if (deleteResult.success) {
            this.alertProvider.toast('Successful deleted', 'bottom');
            this.navCtrl.setRoot('AdmCategoriesPage');
          }
        });

    } catch (error) {
      console.log('Error deleting', error);
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
          text: 'Cancel',
          role: 'destructive',
          handler: () => {

          },
          icon: this.platform.is('ios') ? null : 'close'
        }
      ]
    });

    actionSheet.present();
  }

}
