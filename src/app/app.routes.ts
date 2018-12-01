import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: './pages/home-page/home-page.module#HomeModule'
    },
  {
    path: 'about',
    loadChildren: './pages/about-page/about-page.module#AboutModule'
  },
  {
    path: 'skills',
    loadChildren: './pages/skills-page/skills-page.module#SkillsModule'
  },
  {
    path: 'education',
    loadChildren: './pages/education-page/education-page.module#EducationModule'
  },
  {
    path: 'experience',
    loadChildren: './pages/experience-page/experience-page.module#ExperienceModule'
  },
  {
    path: 'spoken',
    loadChildren: './pages/spoken-page/spoken-page.module#SpokenModule'
  },
  {
    path: 'blog',
    loadChildren: './pages/blog-page/blog-page.module#BlogModule'
  },
  {
    path: 'contact',
    loadChildren: './pages/contact-page/contact-page.module#ContactModule'
  }];
