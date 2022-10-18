import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Bermuda } from "./Bermuda";
import { Observable } from "rxjs";

@Injectable()
export class BermudaService {

    constructor(private http: HttpClient) { }
    protected URLdoServico: string = "http://localhost:3000/";
    listarBermudas(): Observable<Bermuda[]> {
        return this.http.get<Bermuda[]>(this.URLdoServico + "bermudas");
    }
}