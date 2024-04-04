import { Injectable } from '@angular/core';

import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  api = 'http://localhost:3000/locations';

  async getTodasAsLocalizacoesHousing(): Promise<HousingLocation[]> {
    const dadosApi: Response = await fetch(this.api);
    return await dadosApi.json() ?? [];
  }

  async getLocalizacaoHousingPorId(id: number): Promise<HousingLocation | undefined> {
    const dadosApi: Response = await fetch(`${this.api}/${id}`);
    return await dadosApi.json() ?? {};
  }

  consoleFormApp(nome: string, sobrenome: string, email: string) {
    console.log(`Aplicacao Homes recebeu: Nome: ${nome}, sobrenome: ${sobrenome}, email: ${email}`);
  }
}
