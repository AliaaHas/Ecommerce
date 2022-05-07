import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  sharedValue:BehaviorSubject<number>
  constructor( ) {
    this.sharedValue=new BehaviorSubject<number>(0);

  }
}
