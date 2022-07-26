import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article?: Article
  @Input() quantite: number = 1

  constructor(
    private route : ActivatedRoute,
    private articlesrv: ArticleService,
    private location: Location
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
    alert("Soon to be implemented")
  }

}
