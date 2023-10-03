import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'modal-component',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class ModalComponent implements OnInit {
  // show: false
  @Input() asd: string
  constructor() {}
  ngOnInit() {}
}
