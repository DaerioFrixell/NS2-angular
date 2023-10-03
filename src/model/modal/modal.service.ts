import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(true)

  openModal() {
    this.isVisible$.next(true)
    console.log('this.isVisible: ', this.isVisible$)
  }

  closeModal() {
    this.isVisible$.next(false)
    console.log('this.isVisible: ', this.isVisible$)
  }

  handleModal() {
    this.isVisible$.next(!this.isVisible$)
    console.log('this.isVisible: ', this.isVisible$)
  }
}
