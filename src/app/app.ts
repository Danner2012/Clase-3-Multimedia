import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from './components/avatar/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvatarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  title = 'clase-3';
}