import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Logmessage:string
  admin:string
  size:number
  public isMenuCollapsed = true;
  constructor(private router: Router, 
              private loginsrv: ClientService,
              private adminsrv: AdminService) {
    
   }

  ngOnInit(): void {
    this.loginsrv.getLoggedIn.subscribe(response=>{
      this.Logmessage = response[0]
      this.size = response[1]
    })
    this.loginsrv.init();
    this.adminsrv.getadminLoggedIn.subscribe(response => {
      this.admin = response[0];
    })
    this.adminsrv.init()
  }

  /**
   * Navigate to monpanier's page
   */
   monpanier(){
    this.router.navigate(['/monpanier']);
  }
  /**
   * Navigate to acceuil's page
   */
  accueil(){
    this.router.navigate(['/accueil']);
  }
  /**
   * Navigate to connexion's page
   */
  connexion(){
    this.router.navigate(['/connexion']);
  }
  /**
   * Navigate to catalogue's page
   */
  catalogue(){
    this.router.navigate(['/catalogue']);
  }
  /**
   * Navigate to inscription's page
   */
  inscription(){
    this.router.navigate(['inscription'])
  }

  /**
   * Call ClientService.logout() to clear the datas and navigate to accueil's page
   */
  deconnexion(){
    this.loginsrv.logout();
    this.accueil();
  }
  deconnexionadmin(){
    this.adminsrv.logout();
    this.accueil();
  }

}
