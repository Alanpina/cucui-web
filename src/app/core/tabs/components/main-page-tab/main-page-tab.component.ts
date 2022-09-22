import { Component, Input, OnInit } from '@angular/core';
import { MainPageTab } from '../../model/classes/main-page-tab.class';

@Component({
  selector: 'app-main-page-tab',
  templateUrl: './main-page-tab.component.html',
  styleUrls: ['./main-page-tab.component.scss']
})
export class MainPageTabComponent implements OnInit {

  @Input('tab') tab: MainPageTab = new MainPageTab()
  constructor() { }

  ngOnInit(): void {
  }

}
