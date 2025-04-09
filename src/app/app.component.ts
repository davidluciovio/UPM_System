import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';
import { SideMenuComponent } from "./shared/side-menu/side-menu.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SideMenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');
  }
  title = 'upmSystemWeb';
}
