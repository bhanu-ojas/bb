import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DollService {

  constructor(private http:HttpClient) { }
  get(){
    // return this.h.get('https://jsonplaceholder.typicode.com/albums');
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
}
