import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Achat } from './achat';
import { Article } from './article';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient,private router: Router, private artserv: ArticleService) { }

  /**
   * Ajoute un Achat au panier pour le sotcker dans le sessionStorage. Actualise également le total du panier.
   * Augmente la quantité d'un achat si un article identique est deja présent dans le panier.
   * @param achat Un achat avec un Article et une quantite
   */
  ajoutarticle(achat:Achat){
    let panier: Array<Achat> = [];
    let totalp: number = 0;
    let message:string ="Votre article a bien été ajouté";
    if(achat.quantite>1){
      message ="Vos articles ont bien été ajoutés"
    }
    if (JSON.parse(sessionStorage.getItem("totalp"))!=null) {
      totalp = JSON.parse(sessionStorage.getItem("totalp"));
    }
    totalp += achat.article.prix * achat.quantite;
    if (JSON.parse(sessionStorage.getItem("panier"))!=null) {
      panier = JSON.parse(sessionStorage.getItem("panier"));
      panier.forEach(ach => {
        if (ach.article.ref == achat.article.ref) {
          ach.quantite += achat.quantite;
          ach.total += achat.total;
          achat = null;
        }
      });
    }
    if (achat!= null) {
      panier.push(achat);
    }
    sessionStorage.setItem("totalp",JSON.stringify(totalp));
    sessionStorage.setItem("panier",JSON.stringify(panier));
    alert(message);
  }
}
