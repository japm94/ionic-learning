import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingProvider } from '../loading/loading';
import { AlertProvider } from '../alert/alert';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../app/models/HttpResultModel';

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
            resolve({ success: false, data: undefined, err: err });
          });
      } else {
        this.alertProvider.toast('You are Offline, unfortunately the data could not be loaded', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

  public post(url: string, model: any): Promise<HttpResultModel> {
    this.spinnerProvider.Show('Saving information...');
    return new Promise((resolve) => {
      if (this.networkProvider.isOnline) {
        this.http.post(url, model)
          .subscribe(_res => {
            this.spinnerProvider.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerProvider.Hide();
            console.log(err);
            if (err.status == 400) {
              let msg = '';
              err.error.validation.forEach(_err => {
                msg += `<li>${_err.message}</li>`;
              });
              this.alertProvider.alert(err.error.message, msg);
            }
            else if (err.status == 404) {
              this.alertProvider.alert('Information', err.error.message);
            }
            else {
              this.alertProvider.toast('Connection failed, verify your connection and try again', 'bottom');
              resolve({ success: false, data: undefined, err: err });
            }
          });
      } else {
        this.alertProvider.toast('You are Offline, unfortunately the data could not be loaded', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

  public put(url: string, model: any): Promise<HttpResultModel> {
    this.spinnerProvider.Show('Updating information...');
    return new Promise((resolve) => {
      if (this.networkProvider.isOnline) {
        this.http.post(url, model)
          .subscribe(_res => {
            this.spinnerProvider.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerProvider.Hide();
            console.log(err);
            if (err.status == 400) {
              let msg = '';
              err.error.validation.forEach(_err => {
                msg += `<li>${_err.message}</li>`;
              });
              this.alertProvider.alert('Information', msg);
            } else if (err.status == 404) {
              this.alertProvider.alert('Information', err.error.message);
            } else {
              this.alertProvider.toast('Connection failed, verify your connection and try again', 'bottom');
              resolve({ success: false, data: undefined, err: err });
            }
          });
      } else {
        this.alertProvider.toast('You are Offline, unfortunately the data could not be loaded', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

  public delete(url: string): Promise<HttpResultModel> {
    this.spinnerProvider.Show('Removing records...');
    return new Promise((resolve) => {
      if (this.networkProvider.isOnline) {
        this.http.delete(url)
          .subscribe(_res => {
            this.spinnerProvider.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerProvider.Hide();
            this.alertProvider.toast('Connection failed, verify your connection and try again', 'bottom');
            resolve({ success: true, data: undefined, err: err });
          });
      } else {
        this.alertProvider.toast('You are Offline, unfortunately the data could not be loaded', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }

}
