import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencePageComponent } from './experience-page.component';

const routes: Routes = [
  { path: '', component: ExperiencePageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
