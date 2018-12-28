import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  private spinner: Loading = null;

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello LoadingProvider Provider');
  }

  Show(message: string): void {
    if(this.spinner == null){
      this.spinner = this.loadingCtrl.create({content: (message || 'Loading...')});
      this.spinner.present();
    } else {
      this.spinner.data.content = message;
    }
  }

  Hide(): void{
    this.spinner.dismiss();
    this.spinner = null;
  }

}
