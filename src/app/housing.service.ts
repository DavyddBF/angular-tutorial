import { Injectable } from '@angular/core';

import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      nome: 'Acme Fresh Start Housing',
      cidade: 'Chicago',
      estado: 'IL',
      foto: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      unidadesDisponiveis: 4,
      wifi: true,
      lavanderia: true
    },
    {
      id: 1,
      nome: 'A113 Transitional Housing',
      cidade: 'Santa Monica',
      estado: 'CA',
      foto: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      unidadesDisponiveis: 0,
      wifi: false,
      lavanderia: true
    },
    {
      id: 2,
      nome: 'Warm Beds Housing Support',
      cidade: 'Juneau',
      estado: 'AK',
      foto: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      unidadesDisponiveis: 1,
      wifi: false,
      lavanderia: false
    },
    {
      id: 3,
      nome: 'Homesteady Housing',
      cidade: 'Chicago',
      estado: 'IL',
      foto: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      unidadesDisponiveis: 1,
      wifi: true,
      lavanderia: false
    },
    {
      id: 4,
      nome: 'Happy Homes Group',
      cidade: 'Gary',
      estado: 'IN',
      foto: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      unidadesDisponiveis: 1,
      wifi: true,
      lavanderia: false
    },
    {
      id: 5,
      nome: 'Hopeful Apartment Group',
      cidade: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      unidadesDisponiveis: 2,
      wifi: true,
      lavanderia: true
    },
    {
      id: 6,
      nome: 'Seriously Safe Towns',
      cidade: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      unidadesDisponiveis: 5,
      wifi: true,
      lavanderia: true
    },
    {
      id: 7,
      nome: 'Hopeful Housing Solutions',
      cidade: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      unidadesDisponiveis: 2,
      wifi: true,
      lavanderia: true
    },
    {
      id: 8,
      nome: 'Seriously Safe Towns',
      cidade: 'Oakland',
      estado: 'CA',
      foto: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      unidadesDisponiveis: 10,
      wifi: false,
      lavanderia: false
    },
    {
      id: 9,
      nome: 'Capital Safe Towns',
      cidade: 'Portland',
      estado: 'OR',
      foto: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      unidadesDisponiveis: 6,
      wifi: true,
      lavanderia: true
    }
  ];

  getTodasAsLocalizacoesHousing(): HousingLocation[] {
    return this.housingLocationList;
  }

  getLocalizacaoHousingPorId(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
