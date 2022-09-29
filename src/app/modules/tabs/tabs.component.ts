import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainPageTab } from './model/classes/main-page-tab.class';
import { Tab } from './model/interfaces/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  tabs: Array<Tab> = [];
  constructor() {}

  ngOnInit(): void {
    this.tabs = this.getTabs();
  }

  getTabs() {
    let tabs : Array<Tab> = []
    tabs.push(
      new MainPageTab(
        'label1',
        'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/306085162_174645571770936_182557342477771222_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2iaAwl5sS2oAX-wl4FU&_nc_ht=scontent-qro1-1.xx&oh=00_AT-tH4BZgPYvUYmpfm56tZUnXqkiF30cVRz-ycSB6h6u7g&oe=6331A969'
      )
    );
    tabs.push(
      new MainPageTab(
        'label2',
        'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/306358532_174686818433478_1992392525085424333_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1Bhf09P03IIAX8ipePx&_nc_ht=scontent-qro1-1.xx&oh=00_AT8_yBrEmcUBFQikQsxjqr17UwP9q55oZs9AnXDTFdZIWQ&oe=6331B867'
      )
    );
    tabs.push(
      new MainPageTab(
        'label3',
        'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/304919119_174235575145269_5421448887445202579_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=MhyCuym1w7AAX8boVgG&tn=oHnrKMBHw7fH6u3S&_nc_ht=scontent-qro1-1.xx&oh=00_AT-Yq1A0gFZCCWa_53KZ2NsmUCThVk0Sn4nDrOR7SKdPng&oe=6331154C'
      )
    );

    return tabs
  }
}
