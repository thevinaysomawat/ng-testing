import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //variables
  public heading = 'this is about section';
  public textHello = 'hello, this is about section';
  public value = 100;
  public toggleValue = false;
  constructor() { }

  ngOnInit(): void {
  }

}
