import { Component, Input, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IModule } from '../../../upm/interfaces/module.interface';

@Component({
  selector: 'side-menu-card-button',
  imports: [
    ButtonModule
  ],
  templateUrl: './side-menu-card_button.component.html',
  styleUrl: './side-menu-card_button.component.css'
})
export class SideMenuCardButtonComponent { 
  Module: InputSignal<IModule> = input({} as IModule);

  activo: boolean = false;

}
