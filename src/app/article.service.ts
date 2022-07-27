import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AlertService } from './alert.service';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url:string = "http://localhost:8080/api/article/"

  constructor(private http: HttpClient, private router:Router, private alert:AlertService) { }

  /** Tries to fetch all articles in the database */
  findall(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + "findall")
      .pipe(catchError(this.handleError<Article[]>('findall')))
  }

  /** Tries to fetch the article having the given id as his primary key
   * @param id - primary key of the article
   */
  findbyid(id: number): Observable<Article> {
    return this.http.get<Article>(this.url + "findbyid/" + id)
      .pipe(catchError(this.handleError<Article>('findbyid')))
  } 
  /**
   * Create a new Article in the DB
   * @param article Nom and image are required
   */
   create(article:Article):void{
    this.http.post(this.url+"create",JSON.stringify(article),{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {console.log("crud service post OK");      
    },err => {console.log("crud service post KO")});  
  }

  /**
   * Update an Article in the DB
   * @param article Nom and image are required
   */
   update(article:Article):void{
    this.http.put(this.url+"update",JSON.stringify(article),{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {console.log("crud service post OK");      
    },err => {console.log("crud service post KO")});  
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
    this.alert.add(`ArticleService: ${message}`);
  }
}
