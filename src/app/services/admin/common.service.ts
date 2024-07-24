import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
   apiurl = `${environment.api}`;

   getBanner(){
    let url = this.apiurl+ '/banners';
    return this.http.get(url)
   }
   addBanner(data:any){
    let url = this.apiurl+ '/banners';
    return this.http.post(url,data)

   }
}
