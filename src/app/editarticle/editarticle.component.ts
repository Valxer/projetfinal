import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent implements OnInit {
  article= new Article();

  constructor( private route : ActivatedRoute,
              private articlesrv: ArticleService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.getArticle()
  }

  /** Calls the Article Service to fetch the article designated by the id given in url */
  getArticle():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.articlesrv.findbyid(id).subscribe(response => this.article = response)
  }
  update(){
    this.articlesrv.update(this.article)
  }

}
