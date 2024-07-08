import {Component, OnInit} from '@angular/core';
import {IProducto} from "../../interfaces/iproducto";
import {ICategoria} from "../../interfaces/icategoria";
import {ProductoService} from "../../services/producto/producto.service";
import {CategoriaService} from "../../services/categoria/categoria.service";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    NgFor,
    NgIf
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  productos: IProducto[] = [];
  categorias: ICategoria[] = [];

  productoSeleccionado: IProducto | null = null;

  nuevoProducto: IProducto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    categoriaId: 0
  };

  busqueda: string = "";

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }

  cargarProductos(): void {
    this.productoService.getProducts().subscribe((data: IProducto[]) => {
      this.productos = data;
    });
  }

  cargarCategorias(): void {
    this.categoriaService.getCategories().subscribe((categorias: ICategoria[]) => {
      this.categorias = categorias;
    });
  }

  buscarProductos() {
    this.productos = this.productos.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  selectProducto(producto: IProducto): void {
    this.productoSeleccionado = { ...producto }
  }

  guardarProducto(): void {
    if (this.productoSeleccionado) {
      this.productoService.putProduct(this.productoSeleccionado!).subscribe(() => {
        this.cargarProductos();
        this.productoSeleccionado = null;
      });
    } else {
      this.productoService.addProduct(this.nuevoProducto).subscribe(() => {
        this.cargarProductos();
        this.limpiar();
      });
    }
  }

  eliminarProducto(id: number): void {
    this.productoService.deleteProduct(id).subscribe(() => {
      this.cargarProductos();
    });
  }

  limpiar(): void {
    this.nuevoProducto = {
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      categoriaId: 0
    };
  }
}
