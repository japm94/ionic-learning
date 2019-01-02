import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { UserModel } from '../../app/models/usermodel';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';

@Injectable()
export class UserProvider extends ProviderBase<UserModel>{

  url: string = `${ConfigHelper.Url}user`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}user`, http);
  }

  async authenticate(email: string, password: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/authenticate`, { email: email, password: password });
  }

  async register(user: UserModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, user);
  }

  static registerLogin(result: any){
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.user));
  }

  static get isLogged(): boolean{
    return (localStorage.getItem(ConfigHelper.storageKeys.token) != undefined);
  }

}
