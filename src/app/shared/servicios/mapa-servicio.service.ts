import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaServicioService {


  constructor(private http: HttpClient) { }


  getFavoriteLocations(): Observable<HttpResponse<any>> {
    return this.http.get<any>('https://run.mocky.io/v3/b1577fd9-036d-4522-a37e-4277ba9ad097')
  }

  geRoute(): Observable<HttpResponse<any>> {
    return this.http.get<any>('https://run.mocky.io/v3/cb26cb82-fe13-44e1-b03e-473c50f54fef')
  }
}
