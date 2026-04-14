import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'events',
		loadComponent: () =>
			import('./pages/events/events.component').then((m) => m.EventsComponent),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
