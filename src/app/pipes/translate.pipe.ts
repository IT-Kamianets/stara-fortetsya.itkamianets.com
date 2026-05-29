import { ChangeDetectorRef, Pipe, PipeTransform, effect, inject } from '@angular/core';
import { LanguageService } from '../feature/language/language.service';

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false,
})
export class TranslatePipe implements PipeTransform {
	private readonly _languageService = inject(LanguageService);
	private readonly _changeDetectorRef = inject(ChangeDetectorRef);

	constructor() {
		effect(() => {
			this._languageService.language();
			this._changeDetectorRef.markForCheck();
		});
	}

	transform(text: string): string {
		return this._languageService.translateText(text);
	}
}
