import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
 
   }
   http = inject(HttpClient);

   apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani ';

   fetchData(): Observable<any> {
     return this.http.get(this.apiUrl);
   }



}
