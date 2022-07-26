import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Achat } from './achat';
import { AlertService } from './alert.service';
import { Client } from './client';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url:string = "http://localhost:8080/api/commande/"

  constructor(private http: HttpClient , private alert:AlertService) { }

  /**
   * Create a Commande in DB with a client and the total of panier
   * @param client The client that is logged in
   * @param totalp The total of the pannier
   */
  create(client:Client,totalp:number):Observable<Commande> {
    let body = new Commande();
    body.client = new Client();
    body.client.id = client.id;
    body.total=totalp;
    body.date = Date.now();
    return this.http.post<Commande>(this.url+"create",JSON.stringify(body),
    {headers: new HttpHeaders({"Content-Type": "application/json"})})
    .pipe(catchError(this.handleError<Commande>('Create')))
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`); //register the fail in alertService

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the AlertService */
  private log(message: string) {
    this.alert .add(`CommandeService: ${message}`);
  }
}
