import { Tab } from '../interfaces/tab.interface';

export class MainPageTab implements Tab {
  src: string;
  label: string;

  constructor(label: string = '', src: string = '') {
    this.src = src;
    this.label = label;
  }
}
