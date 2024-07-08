import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducto} from "../../interfaces/iproducto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = environment.endPoint;
  private api: string = this.url + '/Producto/';

  constructor(private http: HttpClient) {
  }

  // Get para traer los productos de la base de datos como lista
  getProducts(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.api);
  }

  // Get para obtener un solo producto
  getProductById(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.api}/${id}`);
  }

  // Post para añadir o registrar un nuevo producto en la base de datos.
  addProduct(request: IProducto): Observable<IProducto> {
    return this.http.post<IProducto>(this.api, request);
  }

  // Put para actualizar productos de la base de datos.
  putProduct(request: IProducto): Observable<void> {
    return this.http.put<void>(`${this.api}?id=${request.categoriaId}`, request);
  }

  // Delete para eliminar algún producto de la base de datos
  deleteProduct(idProducto: number): Observable<void> {
    return this.http.delete<void>(`${this.api}?id=${idProducto}`);
  }
}
