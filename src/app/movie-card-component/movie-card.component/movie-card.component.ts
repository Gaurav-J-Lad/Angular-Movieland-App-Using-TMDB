import { Component, Input } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: any;

  // Build full image URL
  getImageUrl(path: string) {
    return 'https://image.tmdb.org/t/p/w500' + path;
  }
}
