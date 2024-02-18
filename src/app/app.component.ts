import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'group-project';
  ngOnInit() {
    console.log('this must throw error');
    console.log('error here');
  }
}
