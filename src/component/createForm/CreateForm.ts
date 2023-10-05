import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductServiceRequest } from 'src/app/service/product.service'

@Component({
  selector: 'createForm-component',
  templateUrl: './createForm.html',
  styleUrls: ['./createForm.scss'],
})
export class CreateFormComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  })

  constructor(private productService: ProductServiceRequest) {}

  ngOnInit() {}

  submit() {
    const newTitle = this.form.controls.title.value
    if (newTitle) {
      this.productService.create({
        title: newTitle,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 3,
          count: 3,
        },
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
