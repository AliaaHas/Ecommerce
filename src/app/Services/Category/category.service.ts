import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) {}



  getAllCateogories():Observable <ICategory[]>
  {
    return this.httpclient.get<ICategory[]>('http://localhost:3000/categories')

  }


}
