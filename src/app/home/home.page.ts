import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  loginForm = new FormGroup(
    {
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      password1: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      // password2: new FormControl(''),
    });


  get userName() {
    return this.loginForm.get('userName');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password1() {
    return this.loginForm.get('password1');
  }
  get phone() {
    return this.loginForm.get('phone');
  }

  loginUser(form: any) {
    if (form.valid) {
      console.log('submitted..', form.value.userName);
      localStorage.setItem('username', this.loginForm.value.userName);
      localStorage.setItem('email', form.value.email);
      localStorage.setItem('password', form.value.password1);
      alert(
        'Data saved in local storage click on show Data button to check ...'
      );
    }
  }
}
