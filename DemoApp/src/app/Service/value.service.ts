import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

 url = 'http://localhost:5000/api/value' 

constructor(private http: HttpClient) { }

getValue() {
  return this.http.get(`${this.url}`);
}

}
