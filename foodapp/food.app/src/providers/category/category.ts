import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { CategoryModel } from '../../app/models/CategoryMondel';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';

@Injectable()
export class CategoryProvider extends ProviderBase<CategoryModel>{

  url: string = `${ConfigHelper.Url}category`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}category`, http);
  }

}
