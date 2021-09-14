import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  get_New_Products() {
    throw new Error('Method not implemented.');
  }
 
  constructor(private _http:HttpClient) { }

  createCountry(user: any){
    return this._http.post("http://localhost:3000/user",user);
  }
  getAllCountry(){
    return this._http.get("http://localhost:3000/user");
  }

  updateCountry(country: any){
    return this._http.put("http://localhost:3000/user/" +country.id,country)
  }

  deleteCountry(country: any){
    return this._http.delete("http://localhost:3000/user/" +country.id)
  }

}
