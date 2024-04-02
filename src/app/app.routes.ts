import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Homes | Sua casa'
    },
    {
        path: 'detalhes/:id',
        component: DetalhesComponent,
        title: 'Detalhes | Sua casa'
    }
];
