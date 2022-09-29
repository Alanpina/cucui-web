import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cucui';

  constructor(private _router : Router){}

  ngOnInit(): void {
    if(this.title == 'cucui'){
      this._router.navigateByUrl('cucui')
    }
  }
}
