import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-gallery',
	imports: [TranslatePipe, NgOptimizedImage],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	lightboxSrc = signal<string | null>(null);

	photos = [
		'assets/gallery/photo-01.jpg',
		'assets/gallery/photo-02.jpg',
		'assets/gallery/photo-03.jpg',
		'assets/gallery/photo-04.jpg',
		'assets/gallery/photo-05.jpg',
		'assets/gallery/photo-06.jpg',
		'assets/gallery/photo-07.jpg',
		'assets/gallery/photo-08.jpg',
		'assets/gallery/photo-09.jpg',
		'assets/gallery/photo-010.jpg',
	];

	open(src: string): void {
		this.lightboxSrc.set(src);
	}

	close(): void {
		this.lightboxSrc.set(null);
	}
}
