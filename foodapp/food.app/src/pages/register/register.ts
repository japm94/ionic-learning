import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../app/models/usermodel';
import { UserProvider } from '../../providers/user/user';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: UserModel = new UserModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private alertProvider: AlertProvider
  ) {
  }

  async register(user: UserModel): Promise<void> {
    let result = await this.userProvider.register(this.user);
    if (result.success) {
      this.alertProvider.toast('Successful registration', 'bottom');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  cancel(): void {
    this.navCtrl.setRoot('LoginPage');
  }

}
