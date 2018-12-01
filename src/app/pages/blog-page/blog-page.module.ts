import { NgModule } from '@angular/core';

import { BlogPageComponent } from './blog-page.component';
import { routing } from './blog-page.routing';

@NgModule({
  imports: [routing],
  declarations: [BlogPageComponent]
})
export class BlogModule {}
