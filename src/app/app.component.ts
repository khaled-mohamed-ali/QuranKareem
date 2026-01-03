import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./features/pages/home/home.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from "./core/navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MatSlideToggleModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quranKareem';
}
