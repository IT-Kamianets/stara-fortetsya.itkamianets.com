import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-reviews',
	imports: [TranslatePipe],
	templateUrl: './reviews.component.html',
	styleUrl: './reviews.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
	protected readonly reviews = signal([
		{
			id: 1,
			name: 'Оксана М.',
			date: 'Березень 2024',
			rating: 5,
			source: 'TripAdvisor',
			text: 'Неймовірне місце! Шашлик з ребер у медово-гірчичному соусі — найкращий, що я куштувала. Літня тераса з видом на каньйон Смотрича — це щось неймовірне. Обов\'язково повернемось!',
		},
		{
			id: 2,
			name: 'Андрій К.',
			date: 'Лютий 2024',
			rating: 5,
			source: 'Google',
			text: 'Організовували весілля на 80 гостей. Персонал — просто супер: все злагоджено, смачно, вчасно. Банкетна зала дуже гарна, жива музика створила чудову атмосферу.',
		},
		{
			id: 3,
			name: 'Марія Р.',
			date: 'Січень 2024',
			rating: 5,
			source: 'TripAdvisor',
			text: 'Атмосфера — як у старовинному замку. Розташування над каньйоном просто захоплює дух. Борщ і курячий шашлик з моцарелою — топ. Обслуговування швидке та уважне.',
		},
		{
			id: 4,
			name: 'Василь Т.',
			date: 'Грудень 2023',
			rating: 4,
			source: 'Google',
			text: 'Чудовий ресторан у самому серці Кам\'янця. Меню різноманітне — і українська, і європейська кухня. Паста Карбонара справжня. Хочеться повернутись влітку на терасу.',
		},
		{
			id: 5,
			name: 'Наталія С.',
			date: 'Листопад 2023',
			rating: 5,
			source: 'TripAdvisor',
			text: 'Святкували день народження. Персонал заздалегідь прикрасив стіл, принесли комплімент від ресторану. Шоколадний фондан — просто шедевр! Точно найкраще місце у місті.',
		},
		{
			id: 6,
			name: 'Ігор П.',
			date: 'Жовтень 2023',
			rating: 4,
			source: 'Google',
			text: 'Були в п\'ятницю ввечері — жива музика додала неймовірної атмосфери. Їжа смачна, порції великі. Парковка зручна. Заклад тримає свою репутацію вже багато років.',
		},
	]);

	protected readonly stars = (n: number) => Array(n).fill(0);
	protected readonly emptyStars = (n: number) => Array(5 - n).fill(0);
}
