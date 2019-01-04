import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';

@Injectable()
export class CameraProvider {

  constructor(
    private camera: Camera,
    private platform: Platform) {

  }

  private _getPicture(source: number, callback): void {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        try {
          let options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
          }

          this.camera.getPicture(options).then(
            (imgData) => {
              let base64Image = `data:image/jpeg;base64,${imgData}`;
              callback(base64Image);
            },
            err => {
              console.log('Problem taking the photo', err)
            });

        } catch (error) {
          console.log('Problem taking the photo', error);
        }
      });
    } else {
      alert('Functionality available only on device')
    }
  }

  public getPictureFromGallery(callback) {
    this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY,
      photo => {
        callback(photo)
      });
  }

  public takePicture(callback) {
    this._getPicture(this.camera.PictureSourceType.CAMERA,
      photo => {
        callback(photo)
      });
  }

}