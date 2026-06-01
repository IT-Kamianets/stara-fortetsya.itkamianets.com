import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
	icon: string;
	description: string;
	items: MenuItem[];
};


@Component({
	imports: [TranslatePipe],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	readonly activeSection = signal('soups');

	readonly activeItems = computed(() => {
		const section = this.menuSections().find(s => s.id === this.activeSection());
		return section ? section.items : [];
	});

	readonly activeDescription = computed(() => {
		const section = this.menuSections().find(s => s.id === this.activeSection());
		return section?.description ?? '';
	});

	readonly activeSectionName = computed(() => {
		const section = this.menuSections().find(s => s.id === this.activeSection());
		return section?.name ?? '';
	});

	selectSection(id: string): void {
		this.activeSection.set(id);
	}

	readonly menuSections = signal<MenuSection[]>([
		{
			id: 'soups',
			name: 'Супи',
			icon: 'soup_kitchen',
			description: 'Традиційні українські супи та авторські крем-супи.',
			items: [
				{ id: 'soup-borscht', name: 'Борщ український', weight: '350 г', price: '170 грн' },
				{ id: 'soup-mushroom', name: 'Крем-суп грибний', weight: '350 г', price: '190 грн' },
				{ id: 'soup-cheese', name: 'Крем-суп сирний', weight: '350 г', price: '190 грн' },
				{ id: 'soup-bograch', name: 'Бограч', weight: '350 г', price: '260 грн' },
			],
		},
		{
			id: 'salads',
			name: 'Салати',
			icon: 'salad',
			description: 'Свіжі салати з локальних інгредієнтів.',
			items: [
				{ id: 'salad-caesar', name: 'Цезар', weight: '250 г', price: '210 грн' },
				{ id: 'salad-crab', name: 'Крабовий', weight: '150 г', price: '210 грн' },
				{ id: 'salad-tuna', name: 'Салат з тунцем', weight: '250 г', price: '230 грн' },
				{ id: 'salad-firm', name: 'Фірмовий', weight: '250 г', price: '240 грн' },
				{ id: 'salad-seafood', name: 'Салат з морепродуктів', weight: '250 г', price: '260 грн' },
				{ id: 'salad-greek', name: 'Грецький', weight: '250 г', price: '190 грн' },
				{ id: 'salad-salmon', name: 'Салат з сьомгою та авокадо', weight: '250 г', price: '195 грн' },
				{ id: 'salad-caprese', name: 'Капрезе', weight: '250 г', price: '190 грн' },
				{ id: 'salad-cabbage', name: 'Салат з капусти', weight: '150 г', price: '110 грн' },
				{ id: 'salad-fortress', name: 'Стара Фортеця', weight: '250 г', price: '210 грн' },
			],
		},
		{
			id: 'cold-starters',
			name: 'Холодні закуски',
			icon: 'set_meal',
			description: 'М\'ясні, рибні та овочеві закуски до столу.',
			items: [
				{ id: 'cold-herring', name: 'Оселедець Дністровський', weight: '100 г', price: '110 грн' },
				{ id: 'cold-cossack', name: 'Козацька втіха', weight: '300 г', price: '260 грн' },
				{ id: 'cold-meat', name: 'М\'ясна тарілка', weight: '300 г', price: '410 грн' },
				{ id: 'cold-vegetables', name: 'Овочева нарізка', weight: '100 г', price: '55 грн' },
				{ id: 'cold-italian', name: 'Італійське плато', weight: '100 г', price: '150 грн' },
				{ id: 'cold-mushrooms', name: 'Мариновані гриби', weight: '100 г', price: '75 грн' },
			],
		},
		{
			id: 'hot',
			name: 'Гарячі страви',
			icon: 'local_fire_department',
			description: 'Основні гарячі страви з м\'яса, птиці та овочів.',
			items: [
				{ id: 'hot-deruny', name: 'Деруни зі сметаною', weight: '6 шт', price: '160 грн' },
				{ id: 'hot-deruny-pan', name: 'Дерун панський', weight: '500 г', price: '260 грн' },
				{ id: 'hot-deruny-mushrooms', name: 'Деруни з грибами', weight: '4 шт', price: '210 грн' },
				{ id: 'hot-lavash', name: 'Гриль-лаваш з сиром', weight: '1 шт', price: '160 грн' },
				{ id: 'hot-pockets', name: 'Гаманці з грибами та сиром', weight: '200 г', price: '280 грн' },
				{ id: 'hot-camembert', name: 'Сир камамбер на грилі під ягідним соусом', weight: '1 порц', price: '260 грн' },
				{ id: 'hot-chicken', name: 'Куряча грудка з моцарелою', weight: '1 порц', price: '360 грн' },
				{ id: 'hot-meat-podil', name: 'М\'ясо по-подільськи', weight: '350 г', price: '310 грн' },
				{ id: 'hot-cutlet', name: 'Котлета по-кам\'янецьки', weight: '350 г', price: '290 грн' },
			],
		},
		{
			id: 'grill',
			name: 'Страви на мангалі',
			icon: 'outdoor_grill',
			description: 'М\'ясо, птиця та риба з вугілля.',
			items: [
				{ id: 'grill-pork', name: 'Свинина (антрекот)', weight: '250–300 г', price: '360 грн' },
				{ id: 'grill-neck', name: 'Ошийок у гірчичному соусі', weight: '250–300 г', price: '360 грн' },
				{ id: 'grill-chicken', name: 'Куряче філе з моцарелою', weight: '450 г', price: '360 грн' },
				{ id: 'grill-ribs', name: 'Ребра з медово-гірчичним соусом', weight: '250–300 г', price: '310 грн' },
				{ id: 'grill-vegetables', name: 'Овочі гриль', weight: '300 г', price: '210 грн' },
				{ id: 'grill-veal', name: 'Телятина на мангалі з вишневим соусом', weight: '250 г', price: '410 грн' },
				{ id: 'grill-potato', name: 'Картопля на мангалі', weight: '1 порц', price: '130 грн' },
				{ id: 'grill-fish', name: 'Річкова риба на вугіллі', weight: '1 порц', price: '310 грн' },
			],
		},
		{
			id: 'pasta',
			name: 'Паста',
			icon: 'ramen_dining',
			description: 'Паста з авторськими соусами та морепродуктами.',
			items: [
				{ id: 'pasta-bolognese', name: 'Болоньєзе', weight: '300 г', price: '210 грн' },
				{ id: 'pasta-carbonara', name: 'Карбонара', weight: '300 г', price: '220 грн' },
				{ id: 'pasta-seafood', name: 'Паста з морепродуктами', weight: '300 г', price: '290 грн' },
				{ id: 'pasta-shrimp', name: 'Паста з креветками', weight: '300 г', price: '290 грн' },
				{ id: 'pasta-salmon', name: 'Паста з лососем та томатами', weight: '300 г', price: '380 грн' },
			],
		},
		{
			id: 'garnishes',
			name: 'Гарніри',
			icon: 'grocery',
			description: 'Гарніри до основних страв.',
			items: [
				{ id: 'garnish-village', name: 'Картопля по-селянськи', weight: '200 г', price: '105 грн' },
				{ id: 'garnish-mashed', name: 'Картопляне пюре', weight: '200 г', price: '105 грн' },
				{ id: 'garnish-fries', name: 'Картопля фрі', weight: '250 г', price: '105 грн' },
				{ id: 'garnish-banosh', name: 'Банош з бринзою та шкварками', weight: '250 г', price: '210 грн' },
			],
		},
		{
			id: 'desserts',
			name: 'Десерти',
			icon: 'cake',
			description: 'Солодкі страви власного виробництва.',
			items: [
				{ id: 'dessert-fondan', name: 'Шоколадний фондан', weight: '130 г', price: '200 грн' },
				{ id: 'dessert-pancakes-nutella', name: 'Млинці з нутеллою та карамелізованим бананом', weight: '2 шт', price: '140 грн' },
				{ id: 'dessert-pancakes-apple', name: 'Млинці з яблуком та апельсинами', weight: '2 шт', price: '130 грн' },
				{ id: 'dessert-pancakes-fantasy', name: 'Млинці Фантазія', weight: '1 порц', price: '140 грн' },
				{ id: 'dessert-cheesecakes', name: 'Сирники з ягідним соусом', weight: '200 г', price: '160 грн' },
			],
		},
	]);

}
