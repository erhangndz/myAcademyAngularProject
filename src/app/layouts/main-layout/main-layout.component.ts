import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnDestroy, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  private carousel: bootstrap.Carousel | null = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Initialize any required functionality here
  }

  ngAfterViewInit(): void {
    // Initialize the carousel after the view is initialized
    this.ngZone.runOutsideAngular(() => {
      const carouselElement = this.document.getElementById('hero-carousel');
      if (carouselElement) {
        this.carousel = new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel'
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up the carousel when the component is destroyed
    if (this.carousel) {
      this.carousel.dispose();
    }
  }
}
