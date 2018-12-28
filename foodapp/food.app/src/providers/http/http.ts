import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingProvider } from '../loading/loading';
import { AlertProvider } from '../alert/alert';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../app/models/httpresultmodel';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerProvider: LoadingProvider,
    private alertProvider: AlertProvider,
    private networkProvider: NetworkProvider
  ) {

  }

  public get(url: string): Promise<HttpResultModel> {
    this.spinnerProvider.Show('Loading...');
    return new Promise((resolve) => {
      if (this.networkProvider.isOnline) {
        this.http.get(url)
          .subscribe(_res => {
            this.spinnerProvider.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerProvider.Hide();
            this.alertProvider.toast('Connection failed, verify your connection and try again', 'bottom');
          });
      } else {
        this.alertProvider.toast('You are Offline, unfortunately the data could not be loaded', 'bottom');
      }
    });
  }

}
