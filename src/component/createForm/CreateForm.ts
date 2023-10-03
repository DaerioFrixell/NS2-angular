import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log(this.form.value)
    console.log(this.form.controls.title.errors?.minLength)
  }

  getTitle() {
    if (this.form.controls.title.errors) {
      return this.form.controls.title.errors.minLength
    }
    return
  }

  titleErrors = ''
}
