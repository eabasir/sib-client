import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  // must not be deleted
  public static Host = 'http://localhost:3000';
  public static API = RestService.Host +'/api';
  // public static API = '/api';

  constructor(private http: Http) {
  }

  get(url: string = '', isAPI = true): Observable<any> {

    url = isAPI ?  RestService.API + '/' + url : RestService.Host + '/'+ url;
    return this.http.get(url).map(response => response.json());
  }

  post(url: string = '', body, isAPI = true): Observable<any> {
    url = isAPI ?  RestService.API + '/' + url :RestService.Host + '/'+ url;
    return this.http.post(url, body).map(response => response.json());
  }

  put(url: string = '', body, isAPI = true): Observable<any> {
    url = isAPI ?  RestService.API + '/' + url : RestService.Host +'/'+ url;
    return this.http.put(url, body).map(response => response.json());
  }

  delete(url: string = '', body, isAPI = true): Observable<any> {
    url = isAPI ?  RestService.API + '/' + url : RestService.Host +'/'+ url;
    return this.http.delete(url, body).map(response => response.json());
  }


}
