import {Component, OnInit} from '@angular/core';
import {ICategoria} from "../../interfaces/icategoria";
import {CategoriaService} from "../../services/categoria/categoria.service";
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    RouterOutlet,
    HttpClientModule,
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  categorias: ICategoria[] = [];
  nombre: string = "";
  busqueda: string = "";
  categoriaId: number = 0;

  constructor(private categoriaService: CategoriaService) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.categoriaService.getCategories().subscribe((categorias: ICategoria[]) => {
      this.categorias = categorias;
    });
  }

  addCategoria() {
    const request: ICategoria = {
      categoriaId: 0,
      nombre: this.nombre,
    }

    this.categoriaService.addCategory(request).subscribe({
      next: (data) => {
        this.nombre = "";
        this.ngOnInit()
      }, error(error) {
        console.log(error);
      },
    });
  }

  getCategoria(categoria: ICategoria) {
    this.nombre = categoria.nombre;
    this.categoriaId = categoria.categoriaId
  }

  updateCategoria() {
    const request: ICategoria = {
      categoriaId: this.categoriaId,
      nombre: this.nombre,
    }

    this.categoriaService.putCategory(request).subscribe({
      next: (data) => {
        this.nombre = "";
        this.categoriaId = 0;
        this.ngOnInit();
      }, error(error) {
        console.log(error);
      },
    });
  }

  saveCategoria() {
    if (this.categoriaId === 0) {
      this.saveCategoria();
    } else {
      this.updateCategoria();
    }
  }

  deleteCategoria(categoria: ICategoria) {
    this.categoriaService.deleteCategory(categoria.categoriaId).subscribe({
      next: (data) => {
        this.ngOnInit()
      }, error(error) {
        console.log(error);
      }
    });
  }
}
