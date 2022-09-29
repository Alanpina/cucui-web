import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cucui',
  templateUrl: './cucui.component.html',
  styleUrls: ['./cucui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CucuiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
