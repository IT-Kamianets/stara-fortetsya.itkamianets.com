import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'menu',
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'events',
		loadComponent: () =>
			import('./pages/events/events.component').then((m) => m.EventsComponent),
	},
	{
		path: 'reviews',
		loadComponent: () =>
			import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
	},
	{
		path: 'contacts',
		loadComponent: () =>
			import('./pages/contacts/contacts.component').then((m) => m.ContactsComponent),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
