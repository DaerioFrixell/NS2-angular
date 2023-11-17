import { Component } from '@angular/core'
import { ModalService } from 'src/app/service/modal.service';

@Component({
    selector: "main-page",
    templateUrl: "./main.page.html"
})
export class MainPageComponent {
    constructor(public modalService: ModalService) {}

    public title = "asd"
    public links = {
        home: "home",
        path: ["/"]
    }
}
