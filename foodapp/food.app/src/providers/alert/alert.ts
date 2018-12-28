import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {

  }

  toast(title: string, position: string): void {
    let toast = this.toastCtrl.create({
      message: title,
      duration: 3000,
      position: position
    });
    toast.present();

  }

  alert(title: string, message: string): void {
    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok'],
      enableBackdropDismiss: false
    }).present;
  }

  confirm(title: string, message: string, callBack: Function): void {
    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        { text: 'No', role: 'Cancel', handler: () => { } },
        {
          text: 'Yes', handler: () => {
            callBack();
          }
        }
      ]
    }).present;
  }

}
