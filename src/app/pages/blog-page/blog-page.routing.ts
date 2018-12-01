import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
