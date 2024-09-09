import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VelibComponent} from "./velib/velib.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VelibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agu18tp';
}
