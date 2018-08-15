import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessDatasService {
  public datas;
  private subject = new BehaviorSubject<any>(0);

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

  getOne(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+ id);
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

  setNext(next) {
    this.subject.next(next);
  }
}
