import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Achat } from '../achat';
import { Client } from '../client';

@Component({
  selector: 'app-monpanier',
  templateUrl: './monpanier.component.html',
  styleUrls: ['./monpanier.component.scss']
})
export class MonpanierComponent implements OnInit {

  header: string;
  panier: Array<Achat>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let client = JSON.parse(sessionStorage.getItem("client"));
    this.header = "La commande de " +  client.nom + " " + client.prenom;
    if (JSON.parse(sessionStorage.getItem("totalp")) != null) {
      this.header += " (Montant de panier :" + JSON.parse(sessionStorage.getItem("totalp")) +" €)"
    }
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
  }

  /**
   * Navigate to commande's page
   */
   commande(){
    this.router.navigate(['commande'])
  }
  /**
   * Navigate to recap's page
   */
   recap(){
    this.router.navigate(['recap'])
  }
  /**
   * Navigate to reset's page
   */
   reset(){
    this.router.navigate(['reset'])
  }

}
