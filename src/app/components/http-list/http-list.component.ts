import { Component } from '@angular/core';

@Component({
  selector: 'app-http-list',
  templateUrl: './http-list.component.html',
  styleUrls: ['./http-list.component.scss']
})
export class HttpListComponent {
  public items = ['hello', 'there', 'brother'];
  constructor(

  ) { }
}
