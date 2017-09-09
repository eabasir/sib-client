import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  // must not be deleted
  public static Host = 'http://localhost:3000';
  // public static API = RestService.Host +'/api';
  public static API = '/api';

  constructor(private http: Http) {
  }

  get(url: string = ''): Observable<any> {
    return this.http.get( RestService.API + '/' + url).map(response => response.json());
  }
  post(url: string = '', body): Observable<any> {
    return this.http.post( RestService.API + '/' + url , body).map(response => response.json());
  }
  put(url: string = '', body): Observable<any> {
    return this.http.put( RestService.API + '/' + url , body).map(response => response.json());
  }
  delete(url: string = '', body): Observable<any>{
    return this.http.delete( RestService.API + '/' + url , body).map(response => response.json());
  }


}
