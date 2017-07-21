import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  public static API = '/api';

  constructor(private http: Http) {
  }

  get(url: string = ''): Observable<Response> {
    return this.http.get( RestService.API + '/' + url);
  }
  post(url: string = '', body): Observable<Response> {
    return this.http.post( RestService.API + '/' + url , body);
  }


}
