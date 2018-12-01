import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsPageComponent } from './skills-page.component';

const routes: Routes = [
  { path: '', component: SkillsPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
