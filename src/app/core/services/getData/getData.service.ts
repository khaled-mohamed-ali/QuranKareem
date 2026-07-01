import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surah } from '../../../shared/models/surah';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() {
 
   }
   http = inject(HttpClient);
   surah = signal<null | Surah>(null);


  //  apiUrl = 'http://api.alquran.cloud/v1/quran/quran-uthmani ';

   apiUrl = 'https://api.alquran.cloud/v1/quran/ar.alafasy';
   

   fetchData(): Observable<any> {
     return this.http.get(this.apiUrl);
   }

 


   






}
