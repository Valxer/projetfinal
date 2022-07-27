import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-gestionarticle',
  templateUrl: './gestionarticle.component.html',
  styleUrls: ['./gestionarticle.component.scss']
})
export class GestionarticleComponent implements OnInit {
  admin:Admin
  articles: Array<Article>
  newarticle= new Article()

  constructor(private adminsrv: AdminService,
              private artsrv: ArticleService,
              private route: Router
    ) { }

  ngOnInit(): void {
    this.admin= JSON.parse(sessionStorage.getItem("admin"));
    this.loadarticles()
  }
  
  loadarticles(){
    this.artsrv.findall().subscribe(
      reponse=>{this.articles=reponse}
      );
  }

  update(ref:number){
    this.route.navigate(['editarticle/'+ref])
  }
  remove(ref:number){
    this.artsrv.delete(ref)
  }
  add(){
    this.artsrv.create(this.newarticle)
  }

}
