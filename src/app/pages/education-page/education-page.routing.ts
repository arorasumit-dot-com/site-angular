import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPageComponent } from './education-page.component';

const routes: Routes = [
  { path: '', component: EducationPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
