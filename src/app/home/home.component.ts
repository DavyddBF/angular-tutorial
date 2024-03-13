import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtre por Cidade">
        <button class="primary" type="button">Pesquise</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  // templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
