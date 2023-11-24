import { Component, Input } from '@angular/core'

type Link_T = {
  value: string,
  path: string[],
}

@Component({
  selector: 'links-ui',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksUiComponent {
  @Input() links: Link_T[];
}
