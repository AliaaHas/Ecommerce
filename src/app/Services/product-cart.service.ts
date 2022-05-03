import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  sharedValue = new Subject();
  constructor() { 

  }
}
