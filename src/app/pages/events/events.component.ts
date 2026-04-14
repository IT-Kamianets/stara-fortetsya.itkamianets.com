import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

const EVENT_TYPES = [
	{
		id: 'wedding',
		title: 'Весілля у залі фортеці',
		description:
			'Повний цикл організації: банкет, сервіс, декор, музика, фотозони, координація.',
		capacity: '40–120 гостей',
		duration: '5–8 годин',
		icon: 'favorite',
	},
	{
		id: 'corporate',
		title: 'Корпоративи та бізнес-вечері',
		description:
			'Формат під ваші задачі: преміальний банкет, фуршет або камерна вечеря.',
		capacity: '20–100 гостей',
		duration: '3–6 годин',
		icon: 'groups',
	},
	{
		id: 'birthday',
		title: 'Дні народження та ювілеї',
		description:
			'Тепла атмосфера, спеціальне меню, торт, ведучий або жива музика.',
		capacity: '10–80 гостей',
		duration: '3–5 годин',
		icon: 'cake',
	},
	{
		id: 'family',
		title: 'Сімейні події',
		description:
			'Хрестини, сімейні зустрічі, особливі дати з делікатною подачею.',
		capacity: '10–50 гостей',
		duration: '2–4 години',
		icon: 'celebration',
	},
	{
		id: 'tour',
		title: 'Камерні дегустації',
		description:
			'Авторські сети від шефа, винне парування, історія страв.',
		capacity: '8–24 гості',
		duration: '2–3 години',
		icon: 'wine_bar',
	},
	{
		id: 'concert',
		title: 'Вечори з музикою',
		description:
			'Живі виступи, саксофон, вокал, DJ-сет, акустичні вечори.',
		capacity: 'до 120 гостей',
		duration: '2–4 години',
		icon: 'music_note',
	},
];

const HOLIDAYS = [
	'Новий рік та Різдво',
	'День закоханих',
	'8 Березня',
	'Великдень',
	'День матері',
	'День міста',
	'Випускні вечори',
	'Сезонні ярмарки',
	'Осінні та зимові дегустації',
	'Родинні свята та ювілеї',
];

const IDEAS = [
	{
		id: 'chef',
		title: 'Chef’s Table',
		description:
			'Закритий стіл з авторською подачею, історією страв та персональним сервісом.',
		icon: 'restaurant',
	},
	{
		id: 'taste',
		title: 'Дегустаційні сети',
		description: '5–7 курсів із локальними продуктами та сезонними соусами.',
		icon: 'local_dining',
	},
	{
		id: 'photo',
		title: 'Фотозона у стилі фортеці',
		description: 'Декор, свічки, фактурні тканини, живі квіти.',
		icon: 'photo_camera',
	},
	{
		id: 'kids',
		title: 'Дитяча програма',
		description: 'Аніматори, майстер-класи, спеціальне меню.',
		icon: 'star',
	},
	{
		id: 'transfer',
		title: 'Трансфер та зустріч гостей',
		description: 'Допоможемо з логістикою та комфортною посадкою.',
		icon: 'airport_shuttle',
	},
	{
		id: 'decor',
		title: 'Преміум-декор',
		description: 'Світло, флористика, брендовані елементи події.',
		icon: 'auto_awesome',
	},
];

@Component({
	selector: 'app-events',
	standalone: true,
	templateUrl: './events.component.html',
	styleUrl: './events.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
	readonly eventTypes = signal(EVENT_TYPES);
	readonly holidays = signal(HOLIDAYS);
	readonly ideas = signal(IDEAS);
}
