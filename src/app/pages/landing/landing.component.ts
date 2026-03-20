import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type MenuItem = {
	id: string;
	name: string;
	description: string;
	weight: string;
	price: string;
};

type MenuSection = {
	id: string;
	name: string;
	description: string;
	items: MenuItem[];
};

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	readonly menuSections = signal<MenuSection[]>([
		{
			id: 'cold-starters',
			name: 'Холодні закуски',
			description: 'Смакуємо з легких стартів та локальних делікатесів.',
			items: [
				{
					id: 'cs-1',
					name: 'Сирна таріль з медом',
					description: 'Добірні сири, горіхи, сезонні ягоди, трюфельний мед.',
					weight: '180 г',
					price: '—',
				},
				{
					id: 'cs-2',
					name: 'Карпачо з телятини',
					description: 'Тонка нарізка, пармезан, рукола, лимонна олія.',
					weight: '140 г',
					price: '—',
				},
				{
					id: 'cs-3',
					name: 'Брускети з печеним перцем',
					description: 'Чіабата, базиліковий крем, печений перець, фета.',
					weight: '160 г',
					price: '—',
				},
				{
					id: 'cs-4',
					name: 'Асорті домашніх солінь',
					description: 'Сезонні овочі, пряні трави, фірмовий маринад.',
					weight: '220 г',
					price: '—',
				},
			],
		},
		{
			id: 'salads',
			name: 'Салати',
			description: 'Свіжість, легкість, баланс смаків.',
			items: [
				{
					id: 's-1',
					name: 'Салат з качкою та грушею',
					description: 'Філе качки, карамелізована груша, горіхи, мікс зелені.',
					weight: '210 г',
					price: '—',
				},
				{
					id: 's-2',
					name: 'Салат з креветками',
					description: 'Креветки, авокадо, цитрус, рукола, фірмовий соус.',
					weight: '190 г',
					price: '—',
				},
				{
					id: 's-3',
					name: 'Теплий салат з телятиною',
					description: 'Соковита телятина, печені овочі, гірчичний соус.',
					weight: '230 г',
					price: '—',
				},
				{
					id: 's-4',
					name: 'Грецький салат',
					description: 'Томат, огірок, оливки, фета, орегано.',
					weight: '200 г',
					price: '—',
				},
			],
		},
		{
			id: 'soups',
			name: 'Перші страви',
			description: 'Тепло та характер у кожній ложці.',
			items: [
				{
					id: 'sp-1',
					name: 'Борщ з телятиною',
					description: 'Подача зі сметаною та ароматним салом.',
					weight: '350 г',
					price: '—',
				},
				{
					id: 'sp-2',
					name: 'Крем-суп грибний',
					description: 'Лісові гриби, вершки, хрумкі грінки.',
					weight: '300 г',
					price: '—',
				},
				{
					id: 'sp-3',
					name: 'Юшка по-домашньому',
					description: 'Річкова риба, коренеплоди, зелень.',
					weight: '320 г',
					price: '—',
				},
				{
					id: 'sp-4',
					name: 'Бульйон курячий',
					description: 'Домашня локшина, ніжне куряче філе.',
					weight: '300 г',
					price: '—',
				},
			],
		},
		{
			id: 'mains',
			name: 'Гарячі страви',
			description: 'Головні позиції у витонченій подачі.',
			items: [
				{
					id: 'm-1',
					name: 'Стейк яловичий',
					description: 'Середній прожар, соус деміглас, трав’яна олія.',
					weight: '260 г',
					price: '—',
				},
				{
					id: 'm-2',
					name: 'Філе лосося',
					description: 'Ніжне філе, овочевий соте, цитрусний соус.',
					weight: '240 г',
					price: '—',
				},
				{
					id: 'm-3',
					name: 'Качка конфі',
					description: 'Подача з карамелізованими яблуками.',
					weight: '250 г',
					price: '—',
				},
				{
					id: 'm-4',
					name: 'Печене теляче ребро',
					description: 'Томлене ребро, соус з чорного перцю.',
					weight: '280 г',
					price: '—',
				},
			],
		},
		{
			id: 'sides',
			name: 'Гарніри',
			description: 'Підкреслюємо основний смак.',
			items: [
				{
					id: 'sd-1',
					name: 'Картопля з розмарином',
					description: 'Хрустка скоринка, оливкова олія.',
					weight: '180 г',
					price: '—',
				},
				{
					id: 'sd-2',
					name: 'Овочі гриль',
					description: 'Перець, кабачок, баклажан, часник.',
					weight: '170 г',
					price: '—',
				},
				{
					id: 'sd-3',
					name: 'Рис жасмин',
					description: 'Ароматний рис з вершковими нотами.',
					weight: '160 г',
					price: '—',
				},
				{
					id: 'sd-4',
					name: 'Пюре з селери',
					description: 'Кремова текстура, трюфельна олія.',
					weight: '170 г',
					price: '—',
				},
			],
		},
		{
			id: 'drinks',
			name: 'Напої',
			description: 'Класика та фірмові поєднання.',
			items: [
				{
					id: 'd-1',
					name: 'Еспресо / Американо',
					description: 'Свіжозмелена арабіка.',
					weight: '30/120 мл',
					price: '—',
				},
				{
					id: 'd-2',
					name: 'Авторський лимонад',
					description: 'Цитрус, м’ята, сезонні ягоди.',
					weight: '300 мл',
					price: '—',
				},
				{
					id: 'd-3',
					name: 'Фірмовий чай',
					description: 'Чорний чай, трави, цитрус.',
					weight: '400 мл',
					price: '—',
				},
				{
					id: 'd-4',
					name: 'Мінеральна вода',
					description: 'Газована або негазована.',
					weight: '500 мл',
					price: '—',
				},
			],
		},
	]);
}
