import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';

@Component({
	selector: 'app-home',
	imports: [RouterLink, TranslatePipe, ContactModalComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	readonly tableModal = signal(false);
	readonly eventModal = signal(false);
}
