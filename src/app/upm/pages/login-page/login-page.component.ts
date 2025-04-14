import { Component } from '@angular/core';
import { LoginComponent } from '../../../auth/login/login.component';
import { IModule } from '../../interfaces/module.interface';
import { SideMenuComponent } from '../../../shared/side-menu/side-menu.component';

@Component({
  selector: 'app-login-page',
  imports: [
    LoginComponent,
    SideMenuComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent { 
  modules: IModule[] = [];
  
}
