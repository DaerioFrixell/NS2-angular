import { Component, Input } from '@angular/core'

@Component({
  selector: 'links-ui',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksUiComponent {
  @Input() linkValue: string;
  @Input() linkPath: string[];
}
