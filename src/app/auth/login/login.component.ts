import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'login',
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  
  // form = inject(FormBuilder).group({
  //   email: '',
  //   password: ''
  // });

  private auth = inject(AuthService);

  submit() {
    if (this.loginForm.valid) {
      // this.auth.login(this.loginForm.value as { email: string, password: string });
      this.auth.login(this.loginForm.value as { email: string, password: string });
    }

  }
}
