import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent implements OnInit {
  article: Article;

  constructor( private route : ActivatedRoute,
              private articlesrv: ArticleService) { }

  ngOnInit(): void {
  }

  /** Calls the Article Service to fetch the article designated by the id given in url */
  getArticle():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.articlesrv.findbyid(id).subscribe(response => this.article = response)
  }

}
