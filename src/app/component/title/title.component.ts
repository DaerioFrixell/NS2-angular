import { Component, Input } from '@angular/core'

@Component({
  selector: 'title-ui',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleUiComponent {
  @Input() title2: string;
}
