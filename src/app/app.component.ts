import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule, NgFor, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ICategoria} from "./interfaces/icategoria";
import {CategoriaService} from "./services/categoria/categoria.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
