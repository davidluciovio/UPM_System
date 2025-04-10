import { Component, Input, input, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'side-menu-card-button',
  imports: [
    ButtonModule
  ],
  templateUrl: './side-menu-card_button.component.html',
  styleUrl: './side-menu-card_button.component.css'
})
export class SideMenuCardButtonComponent { 
  icon = input('settings');
  label = input('label');

  activo: boolean = false;

}
