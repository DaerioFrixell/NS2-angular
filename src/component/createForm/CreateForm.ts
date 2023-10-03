import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'createForm-component',
  templateUrl: './createForm.html',
  styleUrls: ['./createForm.scss'],
})
export class CreateFormComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>(''),
  })
  constructor() {}
  ngOnInit() {}
}
