import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type MenuItem = {
	id: string;
	name: string;
	description: string;
	weight?: string;
	price?: string;
};

type MenuSection = {
	id: string;
	name: string;
	description: string;
	items: MenuItem[];
};

type MenuPhoto = {
	id: string;
	title: string;
	src: string;
	description: string;
};

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	readonly menuSections = signal<MenuSection[]>([
		{
			id: 'salads',
			name: 'Салати',
			description: 'Свіжість та баланс смаків у фірмовій подачі.',
			items: [
				{
					id: 'salads-1',
					name: 'Салат «Цезар» з куркою',
					description: 'Подача з хрумким салатом, сиром та соусом.',
				},
				{
					id: 'salads-2',
					name: 'Грецький салат',
					description: 'Свіжі овочі, фета, оливки та зелень.',
				},
			],
		},
		{
			id: 'cold-starters',
			name: 'Холодні закуски',
			description: 'Ідеально для початку вечора або до вина.',
			items: [
				{
					id: 'cold-1',
					name: 'М’ясна нарізка з зеленню',
					description: 'Добірні м’ясні делікатеси, подача на дереві.',
				},
			],
		},
		{
			id: 'hot',
			name: 'Гарячі страви',
			description: 'Поживні страви з грилю та домашньої кухні.',
			items: [
				{
					id: 'hot-1',
					name: 'Ребра на грилі',
					description: 'Подача з домашнім соусом та гарніром.',
				},
				{
					id: 'hot-2',
					name: 'Куряче філе гриль',
					description: 'З картоплею фрі, соусом та хрумкими нагетсами.',
				},
				{
					id: 'hot-3',
					name: 'Печінка з картопляним пюре',
					description: 'Подача з маринованими овочами та зеленню.',
				},
			],
		},
		{
			id: 'seafood',
			name: 'Морепродукти',
			description: 'Вишукана подача з ніжними соусами.',
			items: [
				{
					id: 'sea-1',
					name: 'Мідії у вершковому соусі',
					description: 'З сиром та зеленню у авторській подачі.',
				},
			],
		},
		{
			id: 'menu-pages',
			name: 'Повне меню',
			description: 'Усі страви та ціни дивіться у фотоменю нижче.',
			items: [],
		},
	]);

	readonly menuPages = signal<MenuPhoto[]>([
		{
			id: 'menu-salads',
			title: 'Салати',
			src: 'assets/menu/menu-salads.jpg',
			description: 'Сторінка меню з добіркою салатів.',
		},
		{
			id: 'menu-grill',
			title: 'Страви на вугіллі',
			src: 'assets/menu/menu-grill.jpg',
			description: 'Страви з грилю та фірмові подачі.',
		},
		{
			id: 'menu-cold',
			title: 'Холодні закуски',
			src: 'assets/menu/menu-cold-starters.jpg',
			description: 'Закуски та асорті.',
		},
		{
			id: 'menu-desserts',
			title: 'Десерти',
			src: 'assets/menu/menu-desserts.jpg',
			description: 'Солодкі завершення вечора.',
		},
		{
			id: 'menu-first-pasta',
			title: 'Перші страви та пасти',
			src: 'assets/menu/menu-first-pasta.jpg',
			description: 'Супи та пасти.',
		},
		{
			id: 'menu-hot-sides',
			title: 'Гарячі страви та гарніри',
			src: 'assets/menu/menu-hot-sides.jpg',
			description: 'Основні страви та гарніри.',
		},
		{
			id: 'menu-sauces',
			title: 'Соуси',
			src: 'assets/menu/menu-sauces.jpg',
			description: 'Фірмові соуси до страв.',
		},
		{
			id: 'menu-garnishes',
			title: 'Гарніри',
			src: 'assets/menu/menu-garnishes.jpg',
			description: 'Окремі гарніри.',
		},
		{
			id: 'menu-grill-salads',
			title: 'Салати на вугіллі',
			src: 'assets/menu/menu-grill-salads.jpg',
			description: 'Салати, приготовані на грилі.',
		},
		{
			id: 'menu-first',
			title: 'Перші страви',
			src: 'assets/menu/menu-first-courses.jpg',
			description: 'Перші страви.',
		},
	]);

	readonly dishPhotos = signal<MenuPhoto[]>([
		{
			id: 'dish-caesar',
			title: 'Салат «Цезар» з куркою',
			src: 'assets/menu/dish-caesar.jpg',
			description: 'Преміальна подача салату «Цезар».',
		},
		{
			id: 'dish-greek',
			title: 'Грецький салат',
			src: 'assets/menu/dish-greek.jpg',
			description: 'Свіжа овочева композиція.',
		},
		{
			id: 'dish-ribs',
			title: 'Ребра на грилі',
			src: 'assets/menu/dish-ribs.jpg',
			description: 'Гаряча страва з соусом.',
		},
		{
			id: 'dish-chicken',
			title: 'Куряче філе гриль',
			src: 'assets/menu/dish-chicken-grill.jpg',
			description: 'Подача з фрі та соусом.',
		},
		{
			id: 'dish-meat',
			title: 'М’ясна нарізка',
			src: 'assets/menu/dish-meat-platter.jpg',
			description: 'Асорті м’ясних делікатесів.',
		},
		{
			id: 'dish-mussels',
			title: 'Мідії у вершковому соусі',
			src: 'assets/menu/dish-mussels.jpg',
			description: 'Ніжні морепродукти.',
		},
		{
			id: 'dish-liver',
			title: 'Печінка з картопляним пюре',
			src: 'assets/menu/dish-liver.jpg',
			description: 'Домашня подача з зеленню.',
		},
	]);
}
