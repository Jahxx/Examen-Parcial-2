import {Routes} from '@angular/router';
import {CategoriaComponent} from "./components/categoria/categoria.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {ContactoComponent} from "./components/contacto/contacto.component";

export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "categorias", component: CategoriaComponent},
  {path: "productos", component: ProductoComponent},
  {path: "contacto", component: ContactoComponent},
];
