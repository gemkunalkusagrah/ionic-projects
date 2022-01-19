import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  onSubmit(username: any, email: any, password1: any, password2: any) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username == null || username == '') {
      alert("Name can't be blank");
      return false;
    } else if (!email.match(validRegex)) {
      alert('enter a valid email. eg. abc@gmail.com');
    } else if (password1.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    } else if (password1 !== password2) {
      alert('password must be same!');
      return false;
    } else {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password1);
      alert("Data saved in local storage click on show Data button to check ...");
    }
  }
}
