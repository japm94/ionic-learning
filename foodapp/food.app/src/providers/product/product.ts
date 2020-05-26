import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from '../http/http';
import { ProductModel } from '../../app/models/ProductModel';

@Injectable()
export class ProductProvider extends ProviderBase<ProductModel>{

  url: string = `${ConfigHelper.Url}product`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}product`, http);
  }

}
