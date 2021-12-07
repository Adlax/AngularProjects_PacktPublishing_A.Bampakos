import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiUrl = '/api';

  constructor(private http: HttpClient){

  }

  create(object) {
    this.http.post(this.apiUrl,object);
  }

  read(){
    this.http.get(this.apiUrl);
  }

  update(object){
    this.http.put(this.apiUrl,object);
  }

  delete(id){
    this.http.delete(this.apiUrl + id);
  }

}
