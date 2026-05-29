import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './feature/language/language.service';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
	template: '<app-topbar /> <router-outlet /> <app-footer />',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	constructor() {
		inject(LanguageService).init();
	}
}
