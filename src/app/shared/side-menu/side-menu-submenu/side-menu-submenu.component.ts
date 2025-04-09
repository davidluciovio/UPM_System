import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'side-menu-submenu',
  imports: [],
  templateUrl: './side-menu-submenu.component.html',
  styleUrl: './side-menu-submenu.component.css'
})
export class SideMenuSubmenuComponent { 
  visible: InputSignal<boolean> = input(false);

}
