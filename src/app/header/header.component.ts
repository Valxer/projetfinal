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
  Logmessage:any;
  admin: any; //TDL
  
  constructor(private router: Router, private loginsrv: ClientService) {
    
   }

  ngOnInit(): void {
    this.loginsrv.getLoggedIn.subscribe(name=>this.Logmessage = name)
    this.loginsrv.logout();
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
    this.loginsrv.logout();
    this.accueil();
  }

}
