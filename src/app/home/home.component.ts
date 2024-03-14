import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

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
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 913,
    nome: 'Nome de Teste',
    cidade: 'Cidade de Teste',
    estado: 'SC',
    foto: `${this.baseUrl}/example-house.jpg`,
    unidadesDisponiveis: 99,
    wifi: true,
    lavanderia: true
  }
}
