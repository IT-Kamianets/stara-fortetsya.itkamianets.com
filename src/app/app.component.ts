import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './feature/language/language.service';
import { BottomNavComponent } from './layouts/bottom-nav/bottom-nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent, BottomNavComponent],
	template: '<app-topbar /> <router-outlet /> <app-footer /> <app-bottom-nav />',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	constructor() {
		inject(LanguageService).init();
	}
}
