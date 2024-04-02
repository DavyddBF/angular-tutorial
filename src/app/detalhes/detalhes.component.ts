import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  rotas: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: string = '';

  constructor() {
    this.housingLocationId = this.rotas.snapshot.params['id'];
  }
}
