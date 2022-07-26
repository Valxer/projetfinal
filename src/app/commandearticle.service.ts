import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertService } from './alert.service';
import { CommandeArticle } from './commande-article';

@Injectable({
  providedIn: 'root'
})
export class CommandearticleService {

  private url:string = "http://localhost:8080/api/commandearticle/"

  constructor(private http: HttpClient) { }

  /**
   * Create a CommandeArticle in DB with a CommandeArticle
   * @param cmdart the commande.id, the article.ref and the quantite are mandatory
   */
   create(cmdart: CommandeArticle):void {
    console.log(cmdart);
    
    this.http.post<CommandeArticle>(this.url+"create",JSON.stringify(cmdart),
    {headers: new HttpHeaders({"Content-Type": "application/json"})})
    .subscribe(response => {console.log("crud service post OK");},      
    err => {console.log("crud service post KO")});

  }

}
