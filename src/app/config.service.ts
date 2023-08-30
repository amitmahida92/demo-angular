import { environment } from '../environments/environment';

export abstract class ConfService {

  constructor() { }

  public static apiUrl() {
    let API_URL = environment.API_URL;
    return API_URL;
  }

  public static version() {
    return environment.VERSION;
  }

  public static production(): boolean {
    return environment.production;
  }
}
