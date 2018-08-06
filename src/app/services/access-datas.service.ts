import { Injectable } from '@angular/core';
import { Observable, of, Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessDatasService {
  public datas;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.loadDatas();
  }

  loadDatas() {
    console.log('LOAD TENANT');
    return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.datas = data;
      console.log(this.datas);
      this.setDatas();
    });
  }

  setDatas() {
    this.subject.next(this.datas);
    // return new Observable((observer) => {
    //   observer.next(this.datas);
    //   observer.complete();
    // });
  }

  getDatas(): Observable<any> {
    return this.subject.asObservable();
  }
}
