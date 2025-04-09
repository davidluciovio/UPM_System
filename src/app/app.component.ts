import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    SelectModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('dark-mode');
}
  title = 'upmSystemWeb';
}
