import { Component, input, InputSignal } from '@angular/core';
import { ISubModule } from '../../../../upm/interfaces/module.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-menu-submenu-button-link',
  imports: [
    RouterModule
  ],
  templateUrl: './side-menu-submenu-button-link.component.html',
  styleUrl: './side-menu-submenu-button-link.component.css'
})
export class SideMenuSubmenuButtonLinkComponent {
  subModule: InputSignal<ISubModule> = input({} as ISubModule);

  print(route: string) {
    console.log(route);
  }
 }
