import { NgModule } from '@angular/core';

import { ContactPageComponent } from './contact-page.component';
import { routing } from './contact-page.routing';

@NgModule({
  imports: [routing],
  declarations: [ContactPageComponent]
})
export class ContactModule {}
