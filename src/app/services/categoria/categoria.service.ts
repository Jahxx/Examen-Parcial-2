import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategoria} from "../../interfaces/icategoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = environment.endPoint;
  private api: string = this.url + '/Categoria/';

  constructor(private http: HttpClient) {
  }

  // Get para traer las categorias de la base de datos como lista
  getCategories(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(this.api);
  }

  // Post para añadir o registrar una nueva categoría en la base de datos.
  addCategory(request: ICategoria): Observable<ICategoria> {
    return this.http.post<ICategoria>(this.api, request);
  }

  // Put para actualizar categorías de la base de datos.
  putCategory(request: ICategoria): Observable<void> {
    return this.http.put<void>(`${this.api}?id=${request.categoriaId}`, request);
  }

  // Delete para eliminar alguna categoría de la base de datos
  deleteCategory(idCategoria: number): Observable<void> {
    return this.http.delete<void>(`${this.api}?id=${idCategoria}`);
  }
}
