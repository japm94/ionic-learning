
import { Injectable } from '@angular/core';

let config_key_name: string = "config"

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  //Recuperar os dados do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  // Gravar os dados do localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if (showSlide) {
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config))

  }

}
