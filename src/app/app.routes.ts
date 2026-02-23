import { Routes } from '@angular/router';
import { Blog } from './components/blog/blog';
import { AboutUs } from './components/about-us/about-us';
import { Details } from './components/details/details';
import { NotFound } from './components/not-found/not-found';
import { Hero } from './components/hero/hero';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Hero, title: 'Adasa - Home Page' },
  { path: 'blog', component: Blog, title: 'Adasa - Blog Page' },
  { path: 'about', component: AboutUs, title: 'Adasa - About Page' },
  { path: 'blog/:slug', component: Details, title: 'Adasa - Blog Page' },
  { path: '**', component: NotFound, title: 'Error Page' },
];
