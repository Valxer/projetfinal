import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Client } from '../client';
import { Commande } from '../commande';
import { CommandeArticle } from '../commande-article';
import { CommandearticleService } from '../commandearticle.service';
import { IdCommandeArticle } from '../id-commande-article';

@Component({
  selector: 'app-validationpanier',
  templateUrl: './validationpanier.component.html',
  styleUrls: ['./validationpanier.component.scss']
})
export class ValidationpanierComponent implements OnInit {

  totalfinal:number;
  numCom : number;
  client : Client;

  constructor(private artcmdsrv: CommandearticleService) { }

  ngOnInit(): void {
    this.numCom = JSON.parse(sessionStorage.getItem("numCom")); //Get the values we need to display
    this.client =JSON.parse(sessionStorage.getItem("client"));
    this.totalfinal =JSON.parse(sessionStorage.getItem("totalfinal")); 
    this.savepanier(); // Save and reset the panier here. So we are sure we are after the creation of the commande in the DB and we have numCom returned
    sessionStorage.removeItem("numCom");
    sessionStorage.removeItem("totalfinal")
  }

  /**
   * Save the panier into an serie of Commande-Article in the DB, then clear it
   */
  savepanier():void{
    let panier = JSON.parse(sessionStorage.getItem("panier"));
    for (const achat of panier) {
      let cmdart = new CommandeArticle();
      cmdart.id =new IdCommandeArticle();
      cmdart.id.article = new Article();
      cmdart.id.article.ref = achat.article.ref;
      cmdart.id.commande = new Commande();
      cmdart.id.commande.id = this.numCom;
      cmdart.quantite = achat.quantite;
      this.artcmdsrv.create(cmdart);
    }
    sessionStorage.setItem("panier",null);
  }

}
