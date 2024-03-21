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
  templateUrl: './home.component.html',
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