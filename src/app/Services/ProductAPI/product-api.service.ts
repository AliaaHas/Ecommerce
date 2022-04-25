import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private httpoptions;

  constructor(private httpclient:HttpClient) {
    this.httpoptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })

    }
  }

  getAllProducts():Observable <IProduct[]>
  {
    return this.httpclient.get<IProduct[]>('http://localhost:3000/products')
  }

  getProductsByCatID(CateogryID: number): Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/products?CateogryID=${CateogryID}`)
    console.log(CateogryID);
  }


  getProductByID(Id: number): Observable<IProduct>
  {
    return this.httpclient.get<IProduct>(`http://localhost:3000/products/${Id}`)

  }

  addNewProduct(newPrd: IProduct):Observable<IProduct>
  {
    return this.httpclient.post<IProduct>('http://localhost:3000/products',
   JSON.stringify(newPrd),this.httpoptions);
  }


}
