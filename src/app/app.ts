import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomMenubar } from '../bottom-menubar/bottom-menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BottomMenubar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ajay-karumathil');
}
