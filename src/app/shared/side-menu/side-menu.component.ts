import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SideMenuSubmenuComponent } from "./side-menu-submenu/side-menu-submenu.component";
import { SideMenuCardButtonComponent } from './side-menu-card_button/side-menu-card_button.component';

@Component({
  selector: 'side-menu',
  imports: [
    ButtonModule,
    DrawerModule,
    SideMenuSubmenuComponent,
    SideMenuCardButtonComponent
],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent { 
  darkMode: boolean = false;
  visible: boolean = false;

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');

    this.darkMode = !this.darkMode;
  }

}
