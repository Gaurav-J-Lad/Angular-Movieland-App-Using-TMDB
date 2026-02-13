import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../../movie-card-component/movie-card.component/movie-card.component';
import { LoaderComponent } from '../../loader-component/loader.component/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieCardComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  query = '';
  isSearching = false;

  trending: any[] = [];
  popular: any[] = [];
  allMovies: any[] = [];
  searchedMovies: any[] = [];

  // Pagination variables
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];

  moviesService = inject(MoviesService);

  ngOnInit() {
    this.loadTrending();
    this.loadPopular();
    this.getAllMovies(); // load paginated movies
  }

  // Load trending movies for carousel
  loadTrending() {
    this.moviesService.getTrendingMovies().subscribe((res: any) => {
      this.trending = res.results.slice(0, 5);
    });
  }

  // Load popular movies
  loadPopular() {
    this.moviesService.getPopularMovies().subscribe((res: any) => {
      this.popular = res.results.slice(0, 8);
    });
  }

  // Load paginated movies
  getAllMovies(page: number = 1) {
    this.moviesService.getAllMovies(page).subscribe((res: any) => {
      this.allMovies = res.results;

      this.currentPage = res.page;
      this.totalPages = Math.min(res.total_pages, 20); // limit to 20 pages

      this.generatePages();
    });
  }

  // Generate page numbers
  generatePages() {
    this.pages = [];

    let start = Math.max(this.currentPage - 2, 1);
    let end = Math.min(start + 4, this.totalPages);

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }

  // Change page
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.getAllMovies(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Search Movies
  searchMovies() {
    if (!this.query.trim()) return;

    this.isSearching = true;

    this.moviesService.searchMovies(this.query).subscribe((res: any) => {
      this.searchedMovies = res.results;
    });
  }

  // Clear search
  clearSearch() {
    this.query = '';
    this.isSearching = false;
    this.searchedMovies = [];

    this.getAllMovies();
  }
}
