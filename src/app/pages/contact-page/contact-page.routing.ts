import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [
  { path: '', component: ContactPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
