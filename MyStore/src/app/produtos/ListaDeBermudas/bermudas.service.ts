import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Tenis } from "./Bermuda";
import { Observable } from "rxjs";

@Injectable()
export class TenisService {
    constructor(private http: HttpClient) { }
    protected URLdoServico: string = "http://localhost:3000/";

    listarBermudas(): Observable<Tenis[]> {
        return this.http.get<Tenis[]>(this.URLdoServico + "bermudas");
    }
}