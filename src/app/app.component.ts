import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'group-project';
  ngOnInit() {
    this.getData();
  }
  getData() {
    console.log('djfghohdnxv');
  }
}
