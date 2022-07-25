import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,private router: Router) { }

  create(client:Client):void{
    this.http.post("http://localhost:8080/api/client/create",JSON.stringify(client),{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {console.log("crud service post OK");      
    },err => {console.log("crud service post KO")});  
  }

  connect(cli:Client){
    this.http.get<Client>("http://localhost:8080/api/client/login/"+ cli.id +"/"+ cli.password ).subscribe(
    reponse=>{cli=reponse;
      sessionStorage.setItem("client", JSON.stringify(cli));
      this.router.navigate(['/confirmationconnexion']);
    },
    err=>{console.log("***************KO");
    this.router.navigate(['/erreurconnexion']);}
    );    
  }
}
