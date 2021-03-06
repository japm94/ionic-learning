import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AboutPage } from '../about/about';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = PerfilPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  openPerfil(){
    this.navCtrl.push(PerfilPage)
  }

  openAbout(){
    this.navCtrl.push(AboutPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
