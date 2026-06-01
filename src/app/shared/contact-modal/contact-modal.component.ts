import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-contact-modal',
	imports: [FormsModule, TranslatePipe],
	templateUrl: './contact-modal.component.html',
	styleUrl: './contact-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactModalComponent {
	readonly title = input.required<string>();
	readonly messagePrefix = input.required<string>();
	readonly closed = output<void>();

	readonly status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

	readonly form = { name: '', phone: '' };

	constructor(private http: HttpClient) {}

	close(): void {
		this.closed.emit();
		this.reset();
	}

	submit(): void {
		const message = [
			this.messagePrefix(),
			`Ім'я: ${this.form.name}`,
			`Телефон: ${this.form.phone}`,
		].join('\n');

		this.status.set('loading');

		this.http.post('https://it.webart.work/api/telegram/contact', {
			slug: 'stara-fortetsya',
			message,
		}).subscribe({
			next: () => { this.status.set('success'); this.reset(); },
			error: () => this.status.set('error'),
		});
	}

	private reset(): void {
		this.form.name = '';
		this.form.phone = '';
	}
}
