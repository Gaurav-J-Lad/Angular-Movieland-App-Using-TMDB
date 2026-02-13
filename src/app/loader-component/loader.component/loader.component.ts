import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
}
