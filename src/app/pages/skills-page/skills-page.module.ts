import { NgModule } from '@angular/core';

import { SkillsPageComponent } from './skills-page.component';
import { routing } from './skills-page.routing';

@NgModule({
  imports: [routing],
  declarations: [SkillsPageComponent]
})
export class SkillsModule {}
