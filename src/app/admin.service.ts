import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public getadminLoggedIn = new Subject();

  constructor(private http: HttpClient,private router: Router) { }

  /**
   * Set the EventEmitter depending on the client connexion and Call connect(cli)
   * @param cli partial client with ID and password
   */
  Islogged(): Observable<boolean>{
    if (JSON.parse(sessionStorage.getItem("admin"))!=null) {
      this.getadminLoggedIn.next(['connected']);      
      return of(true);
  } else {
      this.getadminLoggedIn.next(['Se Connecter']);      
      return of(false);
  }}

  init(): void {
    if (JSON.parse(sessionStorage.getItem("admin"))!=null) {
      this.getadminLoggedIn.next(['connected']);
    }else{
      sessionStorage.setItem("admin",null);
      this.getadminLoggedIn.next(['Se Connecter']);
    }
  }

  /**
   * Disconnect the client and empty every session items.
   */
  logout(): void {
    sessionStorage.setItem("admin",null);
    this.getadminLoggedIn.next(['Se Connecter']);
  }
  /**
   * Connect a partial Client(ID,Password) and store a complete Client(ID,nom,prenom,adresse,password) in the sessionStorage
   * @param cli partial Client(ID,Password)
   * @returns Return true if the connexion succeeded
   */
  connect(admin:Admin){
    this.http.get<Admin>("http://localhost:8080/api/admin/login/"+ admin.id +"/"+ admin.password ).subscribe(
    reponse=>{admin=reponse;
      sessionStorage.setItem("admin", JSON.stringify(admin));
      if (reponse) {
        this.router.navigate(['/gestionarticle']);
      }else{
        alert('Login ou mot de passe admin incorrect');
      } 
    },
    err=>{console.log("***************KO");
    this.router.navigate(['/erreurconnexion']);
    });
  }
}
