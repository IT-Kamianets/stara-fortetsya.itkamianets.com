import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from 'wacom';
import { LanguageOption } from '../../feature/language/language.interface';
import { LanguageService } from '../../feature/language/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-topbar',
	imports: [NgOptimizedImage, RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
	private readonly _themeService = inject(ThemeService);
	private readonly _languageService = inject(LanguageService);

	protected readonly mode = computed(() => this._themeService.mode() ?? 'light');
	protected readonly languages = this._languageService.languages;
	protected readonly currentLanguage = computed(() =>
		this._languageService.getLanguage(this._languageService.language()),
	);
	protected readonly toggleIcon = computed(() =>
		this.mode() === 'dark' ? 'light_mode' : 'dark_mode',
	);
	protected readonly toggleLabel = computed(() =>
		this.mode() === 'dark'
			? this._languageService.translateText('Switch to light mode')
			: this._languageService.translateText('Switch to dark mode'),
	);

	constructor() {
		this._themeService.init();
	}

	protected toggleMode() {
		this._themeService.setMode(this.mode() === 'dark' ? 'light' : 'dark');
	}

	protected setLanguage(language: LanguageOption) {
		this._languageService.setLanguage(language.code);
	}
}
