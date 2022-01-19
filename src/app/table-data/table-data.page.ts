import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.page.html',
  styleUrls: ['./table-data.page.scss'],
})
export class TableDataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  username = localStorage.getItem('username');
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');

}
