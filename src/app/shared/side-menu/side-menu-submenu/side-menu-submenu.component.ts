import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { IModule } from '../../../upm/interfaces/module.interface';
import { SideMenuSubmenuButtonLinkComponent } from './side-menu-submenu-button-link/side-menu-submenu-button-link.component';

@Component({
  selector: 'side-menu-submenu',
  imports: [
    SideMenuSubmenuButtonLinkComponent
  ],
  templateUrl: './side-menu-submenu.component.html',
  styleUrl: './side-menu-submenu.component.css'
})
export class SideMenuSubmenuComponent { 
  Visible: InputSignal<boolean> = input(false);
  Module: InputSignal<IModule> = input({} as IModule);

}
