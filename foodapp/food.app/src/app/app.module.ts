import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoadingProvider } from '../providers/loading/loading';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { NetworkProvider } from '../providers/network/network';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    UserProvider
  ]
})
export class AppModule {}
