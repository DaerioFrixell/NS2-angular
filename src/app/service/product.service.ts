import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, delay, tap, throwError } from 'rxjs'
import { Product } from 'src/dataTypes/Product'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root',
})
export class ProductServiceRequest {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  products: Product[] = []

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(
        delay(300),
        tap((getProducts) => (this.products = getProducts)),
        catchError(this.errorHandler.bind(this))
      )
  }

  create(product: Product): Observable<Product> {
    return this.http
      .post<Product>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((newProduct) => this.products.push(newProduct)),
        tap((_) => console.log(this.products))
      )
  }
}
