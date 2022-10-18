import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Camisa } from "./Camisa";
import { Observable } from "rxjs";



@Injectable()
export class ProdutosService {
    constructor(private http: HttpClient) { }
    protected UrlService: string = "http://localhost:3000/";

    obterProdutos(): Observable<Camisa[]> {
        return this.http.get<Camisa[]>(this.UrlService + "camisas");
    }
}