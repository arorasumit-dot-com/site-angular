import { NgModule } from '@angular/core';

import { AboutPageComponent } from './about-page.component';
import { routing } from './about-page.routing';

@NgModule({
  imports: [routing],
  declarations: [AboutPageComponent]
})
export class AboutModule {}
