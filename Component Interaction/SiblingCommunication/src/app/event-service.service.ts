import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  public mySubject = new BehaviorSubject<any>(null);
  emit<T>(data:T){
    this.mySubject.next(data);
  }
  on<T>():Observable<T>{
    return this.mySubject.asObservable();
  }
  constructor() { }
}
