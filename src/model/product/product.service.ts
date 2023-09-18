import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Products } from 'src/dataTypes/Product'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Products> {
    return this.http.get<Products>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 5 },
      }),
    })
  }
}
