import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-bottom-nav',
	imports: [RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './bottom-nav.component.html',
	styleUrl: './bottom-nav.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomNavComponent {}
