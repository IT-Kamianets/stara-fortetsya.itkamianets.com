import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

type MenuItem = {
	id: string;
	name: string;
	description?: string;
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
	imports: [TranslatePipe],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	readonly menuSections = signal<MenuSection[]>([
		{
			id: 'salads',
			name: 'Салати',
			description: 'Свіжі салати з меню ресторану.',
			items: [
				{
					id: 'salads-caesar',
					name: 'Цезар',
					description: 'Мікс салату, яйце, куряче філе, сир, крутони, соус цезар.',
					weight: '260 г',
					price: '150 грн',
				},
				{
					id: 'salads-milano',
					name: 'Мілано',
					description: 'Мікс салату, яйце, сир, бекон, сухарики, помідори, соус.',
					weight: '250 г',
					price: '120 грн',
				},
				{
					id: 'salads-greek',
					name: 'Грецький',
					description: 'Мікс салату, огірок, помідор, перець, маслини, сир фета.',
					weight: '250 г',
					price: '80 грн',
				},
				{
					id: 'salads-capricciosa',
					name: 'Капричіоза',
					description: 'Листя салату, куряче філе, овочі, сир, зелень.',
					weight: '500 г',
					price: '100 грн',
				},
				{
					id: 'salads-firm',
					name: 'Фірмовий',
					description: 'Листя салату, курка, сир, горіхи, соус.',
					weight: '250 г',
					price: '100 грн',
				},
				{
					id: 'salads-caesar-shrimp',
					name: 'Цезар з креветками',
					weight: '300 г',
					price: '190 грн',
				},
			],
		},
		{
			id: 'cold-starters',
			name: 'Холодні закуски',
			description: 'Сирні, мʼясні та рибні закуски до столу.',
			items: [
				{ id: 'cold-cheese', name: 'Сирна тарілка', weight: '200 г', price: '70 грн' },
				{ id: 'cold-cossack', name: 'Козацька тарілка', weight: '300 г', price: '130 грн' },
				{ id: 'cold-bread', name: 'Хлібці цибуляні', weight: '200 г', price: '20 грн' },
				{
					id: 'cold-smoked-lard',
					name: 'Плато «Копчене сало»',
					weight: '200 г',
					price: '200 грн',
				},
				{
					id: 'cold-pate',
					name: 'Паштет з курячою печінкою',
					weight: '200 г',
					price: '65 грн',
				},
				{
					id: 'cold-fish',
					name: 'Плато «Річкове асорті»',
					weight: '300 г',
					price: '300 грн',
				},
				{ id: 'cold-snacks', name: 'Закуски мʼясні', weight: '300 г', price: '140 грн' },
				{
					id: 'cold-herring',
					name: 'Оселедець «Дністровський»',
					weight: '250 г',
					price: '50 грн',
				},
			],
		},
		{
			id: 'first-courses',
			name: 'Перші страви',
			description: 'Супи, бульйони та перші страви.',
			items: [
				{ id: 'first-zhurek', name: 'Суп «Журек»', weight: '250 г', price: '45 грн' },
				{
					id: 'first-parsnip',
					name: 'Крем-суп з пастернаку',
					weight: '250 г',
					price: '75 грн',
				},
				{ id: 'first-cheese', name: 'Сирний крем-суп', weight: '250 г', price: '50 грн' },
				{
					id: 'first-fish',
					name: 'Рибні кнелі з рибними паличками',
					weight: '350 г',
					price: '50 грн',
				},
				{
					id: 'first-vegetable',
					name: 'Овочевий бульйон',
					weight: '350 г',
					price: '50 грн',
				},
				{ id: 'first-bograch', name: 'Бограч', weight: '250 г', price: '75 грн' },
				{ id: 'first-hunting', name: 'Юшка охотницька', weight: '300 мл', price: '95 грн' },
				{
					id: 'first-borscht',
					name: 'Борщ від газдині',
					weight: '300 мл',
					price: '80 грн',
				},
				{
					id: 'first-lentil',
					name: 'Крем-суп чечевичний',
					weight: '250 мл',
					price: '70 грн',
				},
				{ id: 'first-day', name: 'Суп дня', weight: '250 мл', price: '80 грн' },
			],
		},
		{
			id: 'pasta',
			name: 'Пасти',
			description: 'Пасти з вершковими, мʼясними та морськими акцентами.',
			items: [
				{ id: 'pasta-carbonara', name: 'Карбонара', weight: '300 г', price: '130 грн' },
				{ id: 'pasta-carbonata', name: 'Карбоната', weight: '300 г', price: '130 грн' },
				{
					id: 'pasta-seafood',
					name: 'Паста з морепродуктами',
					weight: '300 г',
					price: '170 грн',
				},
				{
					id: 'pasta-mushrooms',
					name: 'Спеццле з грибами',
					weight: '300 г',
					price: '130 грн',
				},
			],
		},
		{
			id: 'hot',
			name: 'Гарячі страви',
			description: 'Основні гарячі страви з мʼяса, птиці та овочів.',
			items: [
				{ id: 'hot-deruny', name: 'Деруни звичайні', weight: '6 шт', price: '150 грн' },
				{
					id: 'hot-deruny-mushrooms',
					name: 'Деруни з грибами',
					weight: '4 шт',
					price: '230 грн',
				},
				{
					id: 'hot-deruny-pan',
					name: 'Деруни паньські',
					weight: '300 г',
					price: '250 грн',
				},
				{
					id: 'hot-meat-podil',
					name: 'Мʼясо по-подільськи',
					weight: '300 г',
					price: '300 грн',
				},
				{
					id: 'hot-cutlet',
					name: 'Котлета по-камʼянецьки',
					description: 'Ніжна котлета з грибним соусом.',
					weight: '300 г',
					price: '250 грн',
				},
				{
					id: 'hot-gulyanets',
					name: 'Гулянець з грибами та сиром',
					weight: '200 г',
					price: '270 грн',
				},
				{
					id: 'hot-chicken-baked',
					name: 'Курка запечена',
					weight: '400 г',
					price: '95 грн',
				},
				{
					id: 'hot-chicken-zrazy',
					name: 'Курячі зрази з мʼясом',
					weight: '4 шт',
					price: '35 грн',
				},
				{ id: 'hot-nuggets', name: 'Нагетси з курятини', weight: '4 шт', price: '35 грн' },
				{
					id: 'hot-halushky',
					name: 'Галушки з бринзою та сиром',
					weight: '300 г',
					price: '120 грн',
				},
				{ id: 'hot-rice', name: 'Рис по-східному', weight: '300 г', price: '180 грн' },
			],
		},
		{
			id: 'grill',
			name: 'Страви на вугіллі',
			description: 'Мʼясо, сир та овочі з мангалу.',
			items: [
				{
					id: 'grill-pork-entrecote',
					name: 'Свинина антрекот',
					weight: '400 г',
					price: '350 грн',
				},
				{
					id: 'grill-pork-neck',
					name: 'Свинина ошийок',
					weight: '400 г',
					price: '350 грн',
				},
				{
					id: 'grill-veal-cherry',
					name: 'Телятина на мангалі з вишневим соусом',
					weight: '250 г',
					price: '400 грн',
				},
				{
					id: 'grill-chicken-mozzarella',
					name: 'Куряче філе з моцарелою',
					weight: '450 г',
					price: '350 грн',
				},
				{
					id: 'grill-camembert-truffle',
					name: 'Сир камамбер з білим трюфелем',
					weight: '200 г',
					price: '250 грн',
				},
				{
					id: 'grill-vegetables',
					name: 'Овочі на багатті',
					weight: '300 г',
					price: '95 грн',
				},
				{ id: 'grill-lavash', name: 'Рулет з лаваша з сиром', weight: '1 шт' },
				{
					id: 'grill-neck-mustard',
					name: 'Ошийок у гірчичному соусі',
					weight: '200 г',
					price: '85 грн',
				},
				{
					id: 'grill-ribs',
					name: 'Ребра з медово-гірчичним соусом',
					weight: '200 г',
					price: '85 грн',
				},
				{
					id: 'grill-camembert-grapes',
					name: 'Сир камамбер з виноградом на грилі під ягідним соусом',
					weight: '100 г',
					price: '170 грн',
				},
				{
					id: 'grill-bone-steak',
					name: 'Стейк на кістці з вишнево-вершковим соусом',
					weight: '350 г',
					price: '80 грн',
				},
				{
					id: 'grill-veal-steak',
					name: 'Телячий стейк на мангалі',
					weight: '200 г',
					price: '70 грн',
				},
				{
					id: 'grill-potato',
					name: 'Картопля на мангалі',
					weight: '100 г',
					price: '45 грн',
				},
			],
		},
		{
			id: 'garnishes',
			name: 'Гарніри',
			description: 'Гарніри до основних страв.',
			items: [
				{
					id: 'garnish-banosh',
					name: 'Банош з бринзою та шкварками',
					weight: '250 г',
					price: '55 грн',
				},
				{
					id: 'garnish-italian-rice',
					name: 'Італійський рис з овочами',
					weight: '250 г',
					price: '50 грн',
				},
				{
					id: 'garnish-bulgur',
					name: 'Булгур з телятиною',
					weight: '250 г',
					price: '40 грн',
				},
				{ id: 'garnish-mashed', name: 'Картопляне пюре', weight: '200 г', price: '45 грн' },
				{
					id: 'garnish-village-potato',
					name: 'Картопля по-селянське',
					weight: '200 г',
					price: '45 грн',
				},
				{ id: 'garnish-fries', name: 'Картопля фрі', weight: '200 г', price: '45 грн' },
				{
					id: 'garnish-banosh-side',
					name: 'Банош з свиною шкваркою та піджаркою',
					weight: '250 г',
					price: '150 грн',
				},
				{
					id: 'garnish-indian-chicken',
					name: 'Індійський рис з куркою та овочами',
					weight: '250 г',
					price: '160 грн',
				},
				{
					id: 'garnish-indian-vegetables',
					name: 'Індійський рис з овочами',
					weight: '250 г',
					price: '90 грн',
				},
				{
					id: 'garnish-fries-side',
					name: 'Картопля фрі',
					weight: '200 г',
					price: '85 грн',
				},
			],
		},
		{
			id: 'sauces',
			name: 'Соуси',
			description: 'Соуси до гарячих страв, грилю та закусок.',
			items: [
				{ id: 'sauce-bbq', name: 'BBQ', weight: '50 г', price: '20 грн' },
				{ id: 'sauce-cheese', name: 'Сирний соус', weight: '50 г', price: '25 грн' },
				{ id: 'sauce-horseradish', name: 'Соус з хроном', weight: '50 г', price: '20 грн' },
				{ id: 'sauce-herbs', name: 'Злаковий соус', weight: '50 г', price: '20 грн' },
				{ id: 'sauce-tomato', name: 'Томатний соус', weight: '50 г', price: '20 грн' },
				{ id: 'sauce-mushroom', name: 'Грибний соус', weight: '50 г', price: '20 грн' },
				{
					id: 'sauce-mustard-honey',
					name: 'Гірчично-медовий соус',
					weight: '50 г',
					price: '20 грн',
				},
			],
		},
		{
			id: 'desserts',
			name: 'Десерти',
			description: 'Солодкі страви та морозиво.',
			items: [
				{
					id: 'dessert-chocolate',
					name: 'Шоколадний кекс з соусом',
					weight: '100 г',
					price: '110 грн',
				},
				{
					id: 'dessert-pancakes-poppy',
					name: 'Млинці з маком та ванільно-заварним соусом',
					weight: '2 шт',
					price: '35 грн',
				},
				{
					id: 'dessert-pancakes-apple',
					name: 'Млинці з яблуком та апельсином',
					weight: '2 шт',
					price: '35 грн',
				},
				{ id: 'dessert-pear', name: 'Груша у вині з морозивом', weight: '200 г' },
				{
					id: 'dessert-cheesecakes',
					name: 'Сирники з ягідним соусом',
					weight: '200 г',
					price: '90 грн',
				},
				{ id: 'dessert-ice-cream', name: 'Морозиво з фруктами', weight: '150 г' },
			],
		},
	]);

	readonly dishPhotos = signal<MenuPhoto[]>([
		{
			id: 'dish-caesar',
			title: 'Салат «Цезар» з куркою',
			src: '/assets/menu/dish-caesar.jpg',
			description: 'Преміальна подача салату «Цезар».',
		},
		{
			id: 'dish-greek',
			title: 'Грецький салат',
			src: '/assets/menu/dish-greek.jpg',
			description: 'Свіжа овочева композиція.',
		},
		{
			id: 'dish-ribs',
			title: 'Ребра на грилі',
			src: '/assets/menu/dish-ribs.jpg',
			description: 'Гаряча страва з соусом.',
		},
		{
			id: 'dish-chicken',
			title: 'Куряче філе гриль',
			src: '/assets/menu/dish-chicken-grill.jpg',
			description: 'Подача з фрі та соусом.',
		},
		{
			id: 'dish-meat',
			title: 'Мʼясна нарізка',
			src: '/assets/menu/dish-meat-platter.jpg',
			description: 'Асорті мʼясних делікатесів.',
		},
		{
			id: 'dish-mussels',
			title: 'Мідії у вершковому соусі',
			src: '/assets/menu/dish-mussels.jpg',
			description: 'Ніжні морепродукти.',
		},
		{
			id: 'dish-liver',
			title: 'Печінка з картопляним пюре',
			src: '/assets/menu/dish-liver.jpg',
			description: 'Домашня подача з зеленню.',
		},
	]);
}
