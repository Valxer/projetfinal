import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,private router: Router) { }

  login(cli:Client): Observable<boolean>{
    if (this.connect(cli)) {
      this.getLoggedIn.next('Mon Compte');
      return of(true);
  } else {
      this.getLoggedIn.next('Se Connecter');
      console.log("aie")
      return of(false);
  }
  }

  logout(): void {
    sessionStorage.setItem("client",null);
    sessionStorage.setItem("panier",null);
    sessionStorage.setItem("totalp",null);
    this.getLoggedIn.next('Se Connecter');
  }

  create(client:Client):void{
    this.http.post("http://localhost:8080/api/client/create",JSON.stringify(client),{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {console.log("crud service post OK");      
    },err => {console.log("crud service post KO")});  
  }

  connect(cli:Client):boolean{
    this.http.get<Client>("http://localhost:8080/api/client/login/"+ cli.id +"/"+ cli.password ).subscribe(
    reponse=>{cli=reponse;
      sessionStorage.setItem("client", JSON.stringify(cli));
      this.router.navigate(['/confirmationconnexion']);
      return true;
    },
    err=>{console.log("***************KO");
    this.router.navigate(['/erreurconnexion']);
    return false;
    });  
    if (sessionStorage.getItem("client")) {
      return true;
    }else{
      return false;
    }
  }
}


