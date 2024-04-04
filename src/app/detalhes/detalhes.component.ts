import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  rotas: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  cadastrarForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId: number = parseInt(this.rotas.snapshot.params['id'], 10);
    this.housingService.getLocalizacaoHousingPorId(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  cadastrarNoApp(): void {
    this.housingService.consoleFormApp(
      this.cadastrarForm.value.nome ?? '',
      this.cadastrarForm.value.sobrenome ?? '',
      this.cadastrarForm.value.email ?? ''
    );
  }
}
