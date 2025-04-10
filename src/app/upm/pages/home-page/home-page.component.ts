import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../shared/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent { }
