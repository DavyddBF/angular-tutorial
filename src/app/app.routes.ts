import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'datails/:id',
        component: DetalhesComponent,
        title: 'Home detalhes'
    }
];
