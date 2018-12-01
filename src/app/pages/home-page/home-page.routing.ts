import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
