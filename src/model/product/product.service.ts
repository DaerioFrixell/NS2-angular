import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, delay, throwError } from 'rxjs'
import { Products } from 'src/dataTypes/Product'
import { ErrorService } from '../error/error.service'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  getAll(): Observable<Products> {
    return this.http
      .get<Products>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(delay(300), catchError(this.errorHandler.bind(this)))
  }
}
