import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

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

  filtroLocationList: HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getTodasAsLocalizacoesHousing();
    this.filtroLocationList = this.housingLocationList;
  }

  filtraResultados(texto: string) {
    if(!texto) {
      this.filtroLocationList = this.housingLocationList;
      return;
    }

    this.filtroLocationList = this.housingLocationList.filter(
      cadaLista => cadaLista?.cidade.toLowerCase().includes(texto.toLocaleLowerCase()
      )
    );
  }
}
