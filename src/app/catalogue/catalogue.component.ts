import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  articles: Array<Article> = [];
  query:string = null

  constructor(private http: HttpClient,private router: Router,private artsrv: ArticleService) { }

  ngOnInit(): void {
    this.artsrv.findall().subscribe(reponse => this.articles=reponse)
  }

  searchbyname():void {
    if (this.query && this.query != "")
      this.artsrv.findbyname(this.query).subscribe(response => this.articles = response)
    else
    this.ngOnInit()
  }

  goTo(id:number):void {
    const url:string = "/article/" + id
    this.router.navigate([url])
  }

}
