import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false)

  openModal() {
    this.isVisible$.next(true)
  }

  closeModal() {
    this.isVisible$.next(false)
  }

  handleModal() {
    this.isVisible$.next(!this.isVisible$)
  }
}
