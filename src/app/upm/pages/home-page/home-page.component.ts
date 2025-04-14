import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../shared/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { IModule } from '../../interfaces/module.interface';

const modulesModel:IModule[] = [
  {
    name: 'Producción',
    icon: 'inventory',
    subModules: [
      {
        name: 'Reporte Producción',
        route: '/home/production-report'

      },
      {
        name: 'Reporte 01',
        route: '/home/report01'
      },
      {
        name: 'Reporte 02',
        route: '/home/report02'
      }
    ]
  },
  {
    name: 'RH',
    icon: 'group',
    subModules: [
      {
        name: 'Reporte Producción',
        route: '/home/i'
      }
    ]
  },
];

@Component({
  selector: 'app-home-page',
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent { 
  modules: IModule[] = modulesModel;
  
}
