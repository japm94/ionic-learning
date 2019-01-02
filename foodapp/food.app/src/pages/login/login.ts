import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider) {
  }

  async login(): Promise<void> {
    let result = await this.userProvider.authenticate(this.form.email, this.form.password);
    if (result.success) {
      UserProvider.registerLogin(result.data);
      this.navCtrl.setRoot('CategoryPage');
    }
    console.log(result);
  }

  register(): void {
    this.navCtrl.setRoot('RegisterPage');
  }

}
