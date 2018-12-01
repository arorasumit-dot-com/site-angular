import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpokenPageComponent } from './spoken-page.component';

const routes: Routes = [
  { path: '', component: SpokenPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
