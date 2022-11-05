import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadPermissionService {

  constructor(private http: HttpClient) { }


  public loadPermission(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise().then(()=>{
      return ['DEVELOPER']
    })
  }


}
