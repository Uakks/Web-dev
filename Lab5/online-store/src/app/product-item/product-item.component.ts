import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { TruncatePipe } from '../truncate.pipe';
import { SessionService } from '../session.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-item',
  imports: [TruncatePipe],
  template: `
    <div class="product-card">
      <button (click)="removeProduct()" class="remove-btn">X</button>
      <a href="{{product.link}}">
        <img class="product-main-image" [src]="product.images[0]" alt="{{ product.name }}">
      </a>

      <h2>{{ product.name }}</h2>
      <p>{{ product.description | truncate:90 }}</p>
      <p class="rating">Rating: {{ product.rating }} / 5</p>

      <div class="gallery">
        @for (img of product.images; track img) {
          <img [src]="img" alt="{{ product.name }} image">
        }
      </div>

      <div class="share-buttons">
        <button (click)="shareOnWhatsApp()" class="whatsapp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.98 2.63 15.82 3.71 17.36L2 22L6.79 20.31C8.25 21.09 9.96 21.5 11.76 21.5C17.24 21.5 21.72 17.02 21.72 11.54C21.72 6.06 17.24 2 12 2ZM11.76 19.5C10.25 19.5 8.81 19.14 7.55 18.45L7.29 18.32L4 19.34L4.92 16.23L4.79 15.95C4.1 14.7 3.76 13.27 3.76 11.76C3.76 7.43 7.67 3.76 12 3.76C16.33 3.76 20.24 7.43 20.24 11.76C20.24 16.09 16.33 19.5 11.76 19.5ZM16.15 14.68C15.92 14.55 14.52 13.85 14.31 13.78C14.1 13.72 13.93 13.69 13.76 13.97C13.6 14.24 13.13 14.78 13.01 14.92C12.89 15.07 12.77 15.08 12.54 14.95C12.32 14.82 11.6 14.55 10.51 13.65C9.68 12.99 9.05 12.17 8.88 11.94C8.71 11.71 9.02 11.58 9.32 11.22C9.52 10.98 9.72 10.69 9.88 10.51C10.05 10.33 10.12 10.18 10.19 10.03C10.26 9.89 10.19 9.74 10.12 9.6C10.05 9.46 9.49 8.07 9.26 7.55C9.02 7.04 8.79 7.09 8.62 7.09C8.45 7.09 8.19 7.1 7.93 7.34C7.67 7.58 6.98 8.2 6.98 9.64C6.98 11.08 7.94 12.5 8.07 12.68C8.19 12.86 9.92 15.47 12.54 16.61C13.58 17.08 14.18 17.27 14.62 17.39C15.05 17.51 15.56 17.47 15.92 17.41C16.28 17.36 17.51 16.7 17.71 15.98C17.92 15.25 17.92 14.81 17.86 14.68C17.8 14.55 17.53 14.48 17.3 14.43C17.07 14.37 16.38 14.8 16.15 14.68Z" fill="green"/>
          </svg>
        </button>
        <button (click)="shareOnTelegram()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.75 2.5L1 10.43C0.35 10.68 0.36 11.41 1 11.64L5.97 13.42L17.02 6.38C17.4 6.12 17.75 6.25 17.45 6.52L8.49 14.56H8.48L8.49 14.56L8.16 19.77C8.78 19.77 9.07 19.48 9.39 19.17L11.94 16.78L17.32 20.62C18.32 21.2 18.99 20.98 19.26 19.78L22.97 4.48C23.33 3.07 22.48 2.43 21.75 2.5Z" fill="#0088cc"/>
          </svg>
        </button>
      </div>

      <div class="likes">
        <button (click)="toggleLike()" class="like-btn" [class.liked-like-btn]="isLiked">{{ isLiked ? 'Unlike' : 'Like'}}</button>
        <span [class.liked-span]="isLiked">{{ product.likes }}</span>
      </div>
    </div>
  `,
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() productRemoved = new EventEmitter<number>();

  sessionService: SessionService = inject(SessionService);
  categoriesService: CategoriesService = inject(CategoriesService);

  isLiked = false;

  ngOnInit(): void {
    this.isLiked = this.sessionService.isProductLiked(this.product.id);
  }

  shareOnWhatsApp() {
    const message = `Check out this product: ${this.product.name} - ${this.product.link}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnTelegram() {
    const message = `Check out this product: ${this.product.name}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(message)}`, '_blank');
  }

  toggleLike() {
    if (this.isLiked) {
      this.sessionService.unlikeProduct(this.product.id);
      this.categoriesService.decrementLikes(this.product.id);
    } else {
      this.sessionService.likeProduct(this.product.id);
      this.categoriesService.incrementLikes(this.product.id);
    }
    this.isLiked = !this.isLiked;
  }

  removeProduct() {
    this.sessionService.removeProduct(this.product.id);
    this.productRemoved.emit(this.product.id);
  }
}
