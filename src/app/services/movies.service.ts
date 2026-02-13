import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private apiKey = 'e06fff1e4b52dcd6f34d77d98a6217c0'; // <-- Replace with your TMDB API key
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  // Fetch trending movies
  getTrendingMovies(): Observable<any> {
    const url = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Search movies by query
  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }

  // Optional: Get movie details by ID
  getMovieDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Get all Popular Movies
  getPopularMovies() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Get all Movies
  getAllMovies(page: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}`,
    );
  }
}
