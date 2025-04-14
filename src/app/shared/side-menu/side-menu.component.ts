import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SideMenuSubmenuComponent } from "./side-menu-submenu/side-menu-submenu.component";
import { SideMenuCardButtonComponent } from './side-menu-card_button/side-menu-card_button.component';
import { IModule } from '../../upm/interfaces/module.interface';
import { updatePrimaryPalette } from '@primeng/themes';
import { Popover } from 'primeng/popover';
import { SideMenuSettingsComponent } from './side-menu-settings/side-menu-settings.component';

@Component({
  selector: 'side-menu',
  imports: [
    ButtonModule,
    DrawerModule,
    SideMenuSubmenuComponent,
    SideMenuCardButtonComponent,
    SideMenuSettingsComponent,
    Popover
],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent { 
  darkMode: boolean = false;
  visible: boolean = false;

  modules: InputSignal<IModule[]> = input<IModule[]>([]);
  
  module: WritableSignal<IModule> = signal<IModule>({} as IModule);

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');

    this.darkMode = !this.darkMode;
  }

  SendModule(moduleIndex: IModule) : void {
    this.visible = !this.visible;

    this.module.set(moduleIndex);

    console.log(this.module());
    
  }

  changePrimaryColor() {

    updatePrimaryPalette({
        50: '{indigo.50}',
        100: '{indigo.100}',
        200: '{indigo.200}',
        300: '{indigo.300}',
        400: '{indigo.400}',
        500: '{indigo.500}',
        600: '{indigo.600}',
        700: '{indigo.700}',
        800: '{indigo.800}',
        900: '{indigo.900}',
        950: '{indigo.950}'
    });

}

}
