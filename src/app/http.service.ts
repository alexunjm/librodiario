import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  BASE_URL = 'http://localhost:3005/';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.BASE_URL + 'registros');
  }

  insertData(data) {
    return this.http.post(this.BASE_URL + 'nuevo_registro', data);
  }

  updateData(data) {
    return this.http.post(this.BASE_URL + 'actualizar_registro', data);
  }
}
