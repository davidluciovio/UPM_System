import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'side-menu',
  imports: [
    ButtonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent { 
  darkMode: boolean = false;
  
  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');

    this.darkMode = !this.darkMode;
  }

}
