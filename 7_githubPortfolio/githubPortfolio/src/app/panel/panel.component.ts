import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() icon: string = "";
  @Input() caption: string = "";
  //@Input() number: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
