import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class DataResolverService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    let newsUrl = 'https://httpbin.org/post';
    let news = 'The sky is blue';

    return 
  }

}
