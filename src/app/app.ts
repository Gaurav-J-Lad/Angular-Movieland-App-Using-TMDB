import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader-component/loader.component/loader.component';
import { HomeComponent } from './home-component/home.component/home.component';

@Component({
  selector: 'app-root',
  imports: [LoaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('movies-website-landing-page');
}
