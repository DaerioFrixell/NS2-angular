import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/model/modal/modal.service'

@Component({
  selector: 'modal-component',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string
  constructor(public modalService: ModalService) {}
  ngOnInit() {}
}
