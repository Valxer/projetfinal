import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  cli= new Client("","");

  constructor(private http: HttpClient,private router: Router ) { }

  ngOnInit(): void {
  }

  connect(){
    this.http.get<Client>("http://localhost:8080/api/client/login/"+ this.cli.id +"/"+ this.cli.password ).subscribe(
    reponse=>{this.cli=reponse;
      sessionStorage.setItem("client", JSON.stringify(this.cli));
      this.router.navigate(['/confirmationconnexion']);
    },
    err=>{console.log("***************KO");
    this.router.navigate(['/erreurconnexion']);}
    );
    
  }

}
