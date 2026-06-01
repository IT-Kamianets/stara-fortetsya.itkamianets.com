import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
	private readonly _languageService = inject(LanguageService);

	protected readonly languages = this._languageService.languages;
	protected readonly currentLanguage = computed(() =>
		this._languageService.getLanguage(this._languageService.language()),
	);

	protected setLanguage(language: LanguageOption) {
		this._languageService.setLanguage(language.code);
	}
}
