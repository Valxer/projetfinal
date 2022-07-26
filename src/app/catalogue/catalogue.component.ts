import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  articles: Array<Article>;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get<Array<Article>>("http://localhost:8080/api/article/findall").subscribe(
    reponse=>{this.articles=reponse},
    err=>{console.log("***************KO");}
    );
  }

  goTo(id:number):void {
    const url:string = "/article/" + id
    this.router.navigate([url])
  }

}
