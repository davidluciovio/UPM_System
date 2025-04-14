import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { updatePrimaryPalette } from '@primeng/themes';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'side-menu-settings',
  imports: [ButtonModule],
  templateUrl: './side-menu-settings.component.html',
  styleUrl: './side-menu-settings.component.css'
})
export class SideMenuSettingsComponent { 

  changePrimaryColor(event: Event) {
    const elemento = event.target as HTMLElement;
    const color: string = elemento.title.toString();
    // if(color == ''){
    //   return;
    // }

    updatePrimaryPalette({
        50: '{'+color+'.50}',
        100: '{'+color+'.100}',
        200: '{'+color+'.200}',
        300: '{'+color+'.300}',
        400: '{'+color+'.400}',
        500: '{'+color+'.500}',
        600: '{'+color+'.600}',
        700: '{'+color+'.700}',
        800: '{'+color+'.800}',
        900: '{'+color+'.900}',
        950: '{'+color+'.950}'
    });

    console.log(elemento);
    

    
  }
}
