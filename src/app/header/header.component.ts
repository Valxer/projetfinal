import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:any;
  admin: any; //TDL
  
  constructor(private router: Router, private loginsrv: ClientService) { }

  ngOnInit(): void {
    this.loginsrv.getLoggedInName.subscribe(name=>this.userName = name)
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
  inscription(){
    this.router.navigate(['inscription'])
  }

  deconnexion(){
    sessionStorage.setItem("client",null);
    sessionStorage.setItem("panier",null);
    sessionStorage.setItem("totalp",null);
    this.accueil();
  }

}
