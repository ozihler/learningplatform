import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

export class Greeting {
  constructor(public id:number, public content:string){

  }

}

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private readonly URL = "http://localhost:8081/test/";

  constructor(protected httpClient:HttpClient) { }

  public get(): Observable<Greeting> {
    return this.httpClient
      .get<Greeting>(this.URL);

  }
}
