import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Achat } from '../achat';
import { Client } from '../client';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-monpanier',
  templateUrl: './monpanier.component.html',
  styleUrls: ['./monpanier.component.scss']
})
export class MonpanierComponent implements OnInit {

  header: string
  footer: string
  panier: Array<Achat>

  constructor(private router: Router, private cmdsrv:CommandeService) { }

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem("client"))) {
      let client = JSON.parse(sessionStorage.getItem("client"));
      this.header = "La commande de " +  client.nom + " " + client.prenom;
    }
    if (JSON.parse(sessionStorage.getItem("totalp")) != null) {
      this.footer = "Total du panier : " + JSON.parse(sessionStorage.getItem("totalp")) +" €"
    }
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
  }

  /**
   * Navigate to catalogue's page. Check if client is still connected.
   */
   catalogue(){
    if (JSON.parse(sessionStorage.getItem("client"))==null) {
      this.router.navigate(['connexion'])
    }else{
      this.router.navigate(['catalogue'])
    }
    
  }
  /**
   * Save the commande in the DB and reset the panier and totolp. Then navigate to validation's page
   */
   validation(){
    if (JSON.parse(sessionStorage.getItem("client"))==null) {
      this.router.navigate(['connexion'])
    }else{
      let client:Client = JSON.parse(sessionStorage.getItem("client"));
      let totalp = JSON.parse(sessionStorage.getItem("totalp"));
      let numCom:number;
      this.cmdsrv.create(client,totalp).subscribe(response=> numCom=response.id);

      sessionStorage.setItem("totalp", null);
      sessionStorage.setItem("panier",null);
      this.router.navigate(['validationpanier'])
    }    
  }
  /**
   * Empty the panier and totalp and redirect to catalogue()
   */
   reset(){
    this.panier=null;
    this.footer="";
    sessionStorage.setItem("panier", null);
    sessionStorage.setItem("totalp", null);
    this.catalogue();
  }

}
