import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/service/modal.service'

@Component({
  selector: 'modal-component',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class ModalComponent {
  @Input() title: string

  constructor(public modalService: ModalService) {}
}
