import { NgModule } from '@angular/core';

import { EducationPageComponent } from './education-page.component';
import { routing } from './education-page.routing';

@NgModule({
  imports: [routing],
  declarations: [EducationPageComponent]
})
export class EducationModule {}
