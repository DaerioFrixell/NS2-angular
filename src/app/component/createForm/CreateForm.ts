import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from 'src/app/service/modal.service'
import { ProductServiceRequest } from 'src/app/service/product.service'

@Component({
  selector: 'createForm-component',
  templateUrl: './createForm.html',
  styleUrls: ['./createForm.scss'],
})
export class CreateFormComponent {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  })

  constructor(
    public productService: ProductServiceRequest,
    private modalService: ModalService
  ) {}

  submit() {
    if (this.form.controls.title.value) {
      const obj = {
        title: this.form.controls.title.value,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 3,
          count: 3,
        },
      }

      this.productService.create(obj).subscribe((_) => {
        console.log(obj)
        this.modalService.closeModal()
      })
    }
  }

  getTitle() {
    if (this.form.controls.title.errors) {
      return this.form.controls.title.errors.minLength
    }
    return
  }

  titleErrors = ''
}
