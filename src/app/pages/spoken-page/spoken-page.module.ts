import { NgModule } from '@angular/core';

import { SpokenPageComponent } from './spoken-page.component';
import { routing } from './spoken-page.routing';

@NgModule({
  imports: [routing],
  declarations: [SpokenPageComponent]
})
export class SpokenModule {}
