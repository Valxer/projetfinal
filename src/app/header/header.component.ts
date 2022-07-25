import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  client: Client=null;
  admin: any; //TDL
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"));
  }

  accueil(){
    this.router.navigate(['/accueil']);
  }
  connexion(){
    this.router.navigate(['/connexion']);
  }
  catalogue(){
    this.router.navigate(['/catalogue']);
  }

  deconnexion(){
    sessionStorage.setItem("client",null);
    sessionStorage.setItem("panier",null);
    sessionStorage.setItem("totalp",null);
    this.accueil();
  }

}
