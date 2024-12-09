import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  velocity: {
    x: number;
    y: number;
  };
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery relative min-h-[150vh] bg-black overflow-hidden">
      <div class="max-w-[90vw] mx-auto px-8 py-24">
        <h2 class="text-4xl font-light text-white mb-12">Featured Gallery</h2>
        
        <div class="gallery-container relative h-[1000px]">
          <div 
            *ngFor="let image of galleryImages"
            class="gallery-item absolute transition-all duration-300 cursor-pointer"
            [style.transform]="'translate3d(' + image.position.x + 'px, ' + image.position.y + 'px, ' + image.position.z + 'px)'"
            [style.zIndex]="image.position.z"
            (mouseenter)="onImageHover(image)"
            (mouseleave)="onImageLeave(image)">
            <img 
              [src]="image.url" 
              [alt]="image.title"
              class="w-60 h-60 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-container {
      perspective: 1500px;
    }

    .gallery-item {
      transition: transform 0.5s ease-out, z-index 0s;
      opacity: 0;
      animation: fadeIn 0.5s ease-out forwards;
    }

    .gallery-item:hover {
      transform: scale(1.2) !important;
      z-index: 1000 !important;
    }

    .gallery-item img {
      filter: grayscale(100%);
      transition: all 0.5s ease-out;
    }

    .gallery-item:hover img {
      filter: grayscale(0%);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `]
})
export class GalleryComponent implements OnInit, AfterViewInit {
  galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      title: 'Urban Fashion',
      position: { x: 0, y: 0, z: 1 },
      velocity: { x: 0.2, y: 0.15 }
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      title: 'Wedding Moments',
      position: { x: 200, y: 100, z: 2 },
      velocity: { x: -0.15, y: 0.2 }
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      title: 'Product Photography',
      position: { x: 400, y: 200, z: 3 },
      velocity: { x: 0.18, y: -0.15 }
    }
  ];

  private animationFrame: number = 0;
  private containerWidth: number = 0;
  private containerHeight: number = 0;

  ngOnInit() {
    this.initializeRandomPositions();
  }

  ngAfterViewInit() {
    this.containerWidth = window.innerWidth * 0.9;
    this.containerHeight = 1000;
    this.animate();
  }

  private initializeRandomPositions() {
    const margin = 100;
    this.galleryImages = this.galleryImages.map(image => ({
      ...image,
      position: {
        x: margin + Math.random() * (window.innerWidth * 0.8 - margin * 2),
        y: margin + Math.random() * (800 - margin * 2),
        z: Math.floor(Math.random() * 10)
      },
      velocity: {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3
      }
    }));
  }

  private animate() {
    this.galleryImages = this.galleryImages.map(image => {
      let newX = image.position.x + image.velocity.x;
      let newY = image.position.y + image.velocity.y;

      if (newX <= 50 || newX >= this.containerWidth - 370) {
        image.velocity.x *= -1;
        newX = image.position.x + image.velocity.x;
      }
      if (newY <= 50 || newY >= this.containerHeight - 370) {
        image.velocity.y *= -1;
        newY = image.position.y + image.velocity.y;
      }

      return {
        ...image,
        position: {
          ...image.position,
          x: newX,
          y: newY
        }
      };
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  onImageHover(image: GalleryImage) {
    image.position.z = 1000;
  }

  onImageLeave(image: GalleryImage) {
    image.position.z = Math.floor(Math.random() * 10);
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}