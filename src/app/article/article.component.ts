import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achat } from '../achat';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ClientService } from '../client.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article = {ref: null,image: "noimg.png",nom:null, description:null, prix:null}
  @Input() quantite: number = 1

  constructor(
    private route : ActivatedRoute,
    private articlesrv: ArticleService,
    private paniersrv: PanierService,
    private clientsrv: ClientService,
    private router: Router
    ) {}
    
    ngOnInit(): void {
    this.getArticle()
  }

  /** Calls the Article Service to fetch the article designated by the id given in url */
  getArticle():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.articlesrv.findbyid(id).subscribe(response => this.article = response)
  }

  addToCart():void {
    if (JSON.parse(sessionStorage.getItem("client"))) {
      let achat = new Achat();
      achat.article = this.article
      achat.quantite = this.quantite;
      achat.total = this.article.prix * this.quantite
      this.paniersrv.ajoutarticle(achat)
      this.clientsrv.Islogged();
    }
    else
      this.router.navigate(['connexion'])
  }

  goToCatalogue():void {
    this.router.navigate(['catalogue'])
  }

}
