import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { routing } from './home-page.routing';

@NgModule({
  imports: [routing],
  declarations: [HomePageComponent]
})
export class HomeModule {}
