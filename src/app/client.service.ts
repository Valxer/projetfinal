import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public getLoggedIn = new Subject();

  constructor(private http: HttpClient,private router: Router) { }

  /**
   * Set the EventEmitter depending on the client connexion and Call connect(cli)
   * @param cli partial client with ID and password
   */
  Islogged(): Observable<boolean>{
    let size = 0
    if (JSON.parse(sessionStorage.getItem("client"))!=null) {
      let panier = JSON.parse(sessionStorage.getItem("panier"))
      if (panier)
        size = panier.length
      this.getLoggedIn.next(['Mon Compte', size]);      
      return of(true);
  } else {
      this.getLoggedIn.next(['Se Connecter', size]);      
      return of(false);
  }}

  init(): void {
    if (JSON.parse(sessionStorage.getItem("client"))!=null) {
      let panier = JSON.parse(sessionStorage.getItem("panier"))
      let size = panier ? panier.length :0
      this.getLoggedIn.next(['Mon Compte', size]);
    }
    else{
      sessionStorage.setItem("client",null);
      sessionStorage.setItem("panier",null);
      sessionStorage.setItem("totalp",null);
      this.getLoggedIn.next(['Se Connecter', 0]);
    }
  }

  /**
   * Disconnect the client and empty every session items.
   */
  logout(): void {
    sessionStorage.setItem("client",null);
    sessionStorage.setItem("panier",null);
    sessionStorage.setItem("totalp",null);
    this.getLoggedIn.next(['Se Connecter', 0]);
  }

  /**
   * Create a new Client in the DB
   * @param client Complete Client(ID,nom,prenom,adresse,password)
   */
  create(client:Client):void{
    this.http.post("http://localhost:8080/api/client/create",JSON.stringify(client),{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {console.log("crud service post OK");      
    },err => {console.log("crud service post KO")});  
  }

  /**
   * Connect a partial Client(ID,Password) and store a complete Client(ID,nom,prenom,adresse,password) in the sessionStorage
   * @param cli partial Client(ID,Password)
   * @returns Return true if the connexion succeeded
   */
  connect(cli:Client){
    this.http.get<Client>("http://localhost:8080/api/client/login/"+ cli.id +"/"+ cli.password ).subscribe(
    reponse=>{cli=reponse;
      sessionStorage.setItem("client", JSON.stringify(cli));
      if (reponse) {
        this.router.navigate(['/confirmationconnexion']);
      }else{
        this.router.navigate(['/erreurconnexion']);
      } 
    },
    err=>{console.log("***************KO");
    this.router.navigate(['/erreurconnexion']);
    });
  }

}


