import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from 'wacom';

@Component({
	selector: 'app-contacts',
	imports: [TranslatePipe],
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
