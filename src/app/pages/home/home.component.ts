import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private lastScrollY = 0;

  ngOnInit() {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.sticky-header') as HTMLElement;

    if (window.scrollY > this.lastScrollY) {
      // Scrolling down
      header.style.top = '-100px'; // Adjust based on header height
    } else {
      // Scrolling up
      header.style.top = '0';
    }

    this.lastScrollY = window.scrollY;
  }
}